<script setup lang="ts">

defineProps({
    text: String
  })

</script>

<template>
  <section class="bg-blue-500 text-white py-12 px-4">
    <h2 class="text-2xl font-bold text-center">Our Vision</h2>
    <p class="mt-2 text-center mx-auto">
        {{text}}
    </p>
    <p class="mt-2 text-center mx-auto">
        For more information or to discuss how we can support your organization, please contact us at 
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@insightcollabtech.com" class="Redirect"
        target="_blank">admin@insightcollabtech.com</a>
    </p>
  </section>
</template>