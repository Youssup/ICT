<script setup lang="ts">

  defineProps({
    image: String
  })

</script>

<template>
  <img class="lg:rounded-t-lg xs:rounded-sm" :src="$props.image" alt="image">
</template>