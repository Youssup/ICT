<script setup="ts">
  defineProps=({
    text: String
  })
</script>

<template>
  <h2 class="text-3xl font-semibold text-center">{{props.text}}</h2>
</template>