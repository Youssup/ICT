<template>
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div class="text-center pb-6">
            <h1 class="text-3xl">Contact Us!</h1>
            <p class="text-gray-300">Fill up the form below to send us a message.</p>
          </div>
          <form @submit.prevent="handleSubmit">
            <input
              v-model="formData.name"
              class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              v-model="formData.email"
              class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              v-model="formData.subject"
              class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="_subject"
              required
            />
            <textarea
              v-model="formData.message"
              class="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              style="height: 121px;"
              required
            ></textarea>
            <div class="flex justify-between">
              <input
                class="mx-auto shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const sendEmail = async () => {
    try {
      const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
        personalizations: [
          {
            to: [
              {
                email: 'admin@insightcollabtech.com',
              },
            ],
            subject: formData.value.subject,
            content: [
              {
                type: 'text/plain',
                value: `
                  Name: ${formData.value.name}
                  Email: ${formData.value.email}
                  Message: ${formData.value.message}
                `,
              },
            ],
          },
        ],
        from: {
          email: 'formData.value.email',
        },
        headers: {
          Authorization: ``, // Replace with SendGrid API key
        },
      });
  
      console.log('Email sent successfully:', response);
      alert('Email sent successfully!');
      formData.value.name = '';
      formData.value.email = '';
      formData.value.subject = '';
      formData.value.message = '';
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };
  
  const handleSubmit = () => {
    sendEmail();
  };
  </script>
  
  <style scoped>
  </style>
  