<script setup lang="ts">


  defineProps({
    headerText: String,
    mainText: String,
    image:String,
    position:String,
  })
</script>

<template>
  <!-- image on the left -->
  
  <div v-if="$props.position==='left'">

    <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
      <div class="lg:w-[50%] xs:w-full">
        <img class="lg:rounded-t-lg xs:rounded-sm" :src="$props.image" alt="image" />
      </div>
      <div class="lg:w-[50%] xs:w-full bg-gray-100  md:p-4 xs:p-0 rounded-md flex flex-col justify-center items-center">
        <h2 class="text-3xl font-semibold text-center">
          {{ $props.headerText }}
        </h2>
  
        <p class="text-md mt-4 text-center">
          {{ $props.mainText }}  
        </p>
      </div>
    </div>

  </div>

    


  <!-- image on the right -->

  <div v-if="$props.position==='right'">

    <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
    <div class="lg:w-[50%] xs:w-full bg-gray-100  md:p-4 xs:p-0 rounded-md flex flex-col justify-center items-center">
      <h2 class="text-3xl font-semibold text-center">
        {{ $props.headerText }}
      </h2>

      <p class="text-md mt-4 text-center">
        {{ $props.mainText }}  
      </p>
    </div>
    <div class="lg:w-[50%] xs:w-full">
      <img class="lg:rounded-t-lg xs:rounded-sm" :src="$props.image" alt="image" />
    </div>
  </div>

  </div>

  

    

  
</template>
