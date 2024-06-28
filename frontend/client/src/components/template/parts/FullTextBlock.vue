<script setup lang="ts">
  defineProps({
    headerText: String,
    mainText: String,
  })
</script>

<template>
  <div class="lg:w-[50%] xs:w-full bg-gray-100 md:p-4 xs:p-0 rounded-md flex flex-col justify-center items-center">
    <h2 class="text-3xl font-semibold text-center">{{$props.headerText}}</h2>
    <p class="text-md mt-4 text-center">{{$props.mainText}}</p>
  </div>
</template>