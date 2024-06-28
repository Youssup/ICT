<script setup lang="ts">
  import FullTextBlock from './parts/FullTextBlock.vue';

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
        <img class="lg:rounded-t-lg xs:rounded-sm" src="/src/assets/images/proactiveMonitoring.jpg" alt="image">
      </div>
      <div class="lg:w-[50%] xs:w-full bg-gray-100 md:p-4 xs:p-0 rounded-md flex flex-col justify-center items-center">
        <FullTextBlock 
          :header-text="$props.headerText"
          :main-text="$props.mainText"
          :image="$props.image"
        />
      </div>
    </div>
  </div>

  <!-- image on the right -->
  <div v-if="$props.position==='right'">
    <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
      <div class="lg:w-[50%] xs:w-full bg-gray-100 md:p-4 xs:p-0 rounded-md flex flex-col justify-center items-center">
        <FullTextBlock 
          :header-text="$props.headerText"
          :main-text="$props.mainText"
          :image="$props.image"
        />
      </div>
      <div class="lg:w-[50%] xs:w-full">
        <img class="lg:rounded-t-lg xs:rounded-sm" src="/src/assets/images/proactiveMonitoring.jpg" alt="image">
      </div>
    </div>
  </div>
  
</template>
