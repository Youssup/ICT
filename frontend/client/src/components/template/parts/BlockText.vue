<script setup="ts">
  defineProps=({
    text: String
  })
</script>

<template>
  <p class="text-md mt-4 text-center">{{text}}</p>
</template>