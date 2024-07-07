<script setup lang="ts">
import OurVision from '@/components/template/OurVision.vue';
</script>

<template>
  <div class="text-gray-900">
    <!-- Header Section -->
    <div class="relative h-96 w-full">
      <img src="../assets/images/about-us/about.jpg" alt="Background Image"
        class="absolute inset-0 w-full h-full object-cover filter blur-sm">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white font-bold">About us</h1>
        <p class="text-xl text-white mt-4 center mx-20 text-center">With over 25 years of experience, ICT,LLC.
          is a leading provider of innovative information and communications technology solutions. We are
          dedicated to empowering businesses and organizations to achieve their full potential in the digital
          age. Our passion for technology and commitment to excellence drive us to deliver comprehensive,
          customized solutions that enhance efficiency, connectivity, and growth.</p>
      </div>
    </div>

    <!-- Our Mission and Expertise Section -->
    <section class="p-8">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- Our Mission Section -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
          <p class="text-lg mb-6">
            Our mission is to bridge the gap between technology and business, equipping our clients with the
            tools and support they need to thrive in a rapidly evolving technological landscape. We strive
            to create a seamless and integrated digital experience that not only meets but exceeds our
            clients' expectations.
          </p>
        </div>

        <!-- Our Expertise Section -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-bold mb-4">Our Approach</h2>
          <p class="text-lg mb-6">
            At ICT Solutions Inc., we believe in a client-centric approach, working closely with our
            customers to understand their unique challenges and goals. We combine technical expertise with
            innovative thinking to deliver solutions that are not only effective but also aligned with your
            strategic vision. Our commitment to continuous improvement and staying at the forefront of
            technological advancements ensures that we always provide the best possible service. </p>
        </div>

      </div>
    </section>
    <section class="p-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-center ">Our Expertise</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="flex flex-wrap flex-col items-center justify-center px-1 md:px-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-access-point text-blue-500">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12l0 .01" />
              <path d="M14.828 9.172a4 4 0 0 1 0 5.656" />
              <path d="M17.657 6.343a8 8 0 0 1 0 11.314" />
              <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
              <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
            </svg>
            <h1 class="mt-4 text-xl font-semibold text-gray-800 text-center">Network Design and
              Implementation</h1>
            <p class="mt-2 text-gray-500 text-center"> Creating robust, secure, and scalable networks
              tailored to your specific needs.</p>
          </div>

          <div class="flex flex-wrap flex-col items-center justify-center px-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-cloud text-blue-500">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
            </svg>
            <h1 class="mt-4 text-xl font-semibold text-gray-800">Cloud Services</h1>
            <p class="mt-2 text-gray-500 text-center">Providing flexible, scalable, and cost-effective cloud
              solutions for businesses of all sizes.</p>
          </div>

          <div class="flex flex-wrap flex-col items-center justify-center px-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-shield-lock text-blue-500">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12l0 2.5" />
            </svg>
            <h1 class="mt-4 text-xl font-semibold text-gray-800">Cybersecurity</h1>
            <p class="mt-2 text-gray-500 text-center">Protecting your data and systems with state-of-the-art
              security measures and protocols.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mt-12">
          <div class="flex flex-wrap flex-col items-center justify-center px-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-settings text-blue-500">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            </svg>
            <h1 class="mt-4 text-xl font-semibold text-gray-800">Managed IT Services</h1>
            <p class="mt-2 text-gray-500 text-center">Delivering comprehensive support and maintenance to
              ensure your IT infrastructure runs smoothly.</p>
          </div>

          <div class="flex flex-wrap flex-col items-center justify-center px-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-users-group text-blue-500">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
              <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M17 10h2a2 2 0 0 1 2 2v1" />
              <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
            </svg>
            <h1 class="mt-4 text-xl font-semibold text-gray-800">Unified Communications</h1>
            <p class="mt-2 text-gray-500 text-center">Integrating voice, video, messaging, and data services
              to enhance collaboration and productivity.</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Why Choose Us Section -->
  <div class="px-4 py-16 mx-auto max-w-full md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span class="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
        </svg>
        <span class="relative">Why</span>
      </span>
      Choose Us?
    </h2>
  </div>

  <div class="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-5">
    <!-- First Component -->
    <div class="flex flex-col sm:flex-row">
      <div class="sm:mr-4">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
          <svg class="w-12 h-12 text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
      </div>
      <div>
        <h6 class="mb-2 font-semibold leading-5">Innovative Solutions</h6>
        <p class="mb-3 text-sm text-gray-900">
          Leveraging the latest technologies to provide cutting-edge solutions.
        </p>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            State-of-the-art Technology
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Custom Solutions
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Continuous Improvement
          </li>
        </ul>
      </div>
    </div>

    <!-- Second Component -->
    <div class="flex flex-col sm:flex-row">
      <div class="sm:mr-4">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
          <svg class="w-12 h-12 text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
      </div>
      <div>
        <h6 class="mb-2 font-semibold leading-5">Experienced Team</h6>
        <p class="mb-3 text-sm text-gray-900">
          Industry experts with a wealth of experience.
        </p>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Experienced
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Teamwork
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Industry Leaders
          </li>
        </ul>
      </div>
    </div>

    <!-- Third Component -->
    <div class="flex flex-col sm:flex-row">
      <div class="sm:mr-4">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
          <svg class="w-12 h-12 text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
      </div>
      <div>
        <h6 class="mb-2 font-semibold leading-5">Customer Focus</h6>
        <p class="mb-3 text-sm text-gray-900">
          Prioritizing our clients' needs and tailoring our services accordingly.
        </p>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Personalized Services
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Feedback-driven
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Reliable Support
          </li>
        </ul>
      </div>
    </div>

    <!-- Fourth Component -->
    <div class="flex flex-col sm:flex-row">
      <div class="sm:mr-4">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
          <svg class="w-12 h-12 text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
      </div>
      <div>
        <h6 class="mb-2 font-semibold leading-5">Competitive Pricing</h6>
        <p class="mb-3 text-sm text-gray-900">
          High-quality services at affordable prices.
        </p>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Value for Money
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Transparent Pricing
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            No Hidden Fees
          </li>
        </ul>
      </div>
    </div>

    <!-- Fifth Component -->
    <div class="flex flex-col sm:flex-row">
      <div class="sm:mr-4">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
          <svg class="w-12 h-12 text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
      </div>
      <div>
        <h6 class="mb-2 font-semibold leading-5">Proven Track Record</h6>
        <p class="mb-3 text-sm text-gray-900">
          Consistently delivering successful outcomes for our clients.
        </p>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Client Success Stories
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Industry Recognition
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg class="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </span>
            Long-term Relationships
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


  <OurVision
    :text="'To be a trusted partner in the IT sector, recognized for our ability to transform challenges into opportunities through innovative technology solutions. We aim to create a connected and secure digital world where businesses can operate efficiently and effectively.'" />
</template>

<style scoped></style>