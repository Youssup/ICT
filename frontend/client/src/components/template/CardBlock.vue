<script setup lang="ts">


  defineProps({
    headerText: String,
    mainText: String,
    imageName:String,
    imageFolder: String,
    position:String,
  })

  function getImageUrl(imageName: String, imageFolder: String) {
    // This path must be correct for your file
    return new URL(`../../assets/images/${imageFolder}/${imageName}`, import.meta.url)
  }


</script>

<template>
  <!-- image on the left -->
  
  <div>
    <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
      <div class="lg:w-[50%] xs:w-full" v-if="$props.position==='left' || $props.position===null">
        <img class="lg:rounded-t-lg xs:rounded-sm" :src="getImageUrl($props.imageName!, $props.imageFolder!).toString()" alt="image" />
      </div>
      <div class="lg:w-[50%] xs:w-full bg-gray-100  md:p-4 xs:p-0 rounded-md flex flex-col justify-center items-center">
        <h2 class="text-3xl font-semibold text-center">
          {{ $props.headerText }}
        </h2>
  
        <p class="text-md mt-4 text-center">
          {{ $props.mainText }}
        </p>

      </div>
      <div class="lg:w-[50%] xs:w-full" v-if="$props.position==='right'">
        <img class="lg:rounded-t-lg xs:rounded-sm" :src="getImageUrl($props.imageName!, $props.imageFolder!).toString()" alt="image" />
      </div>
    </div>
  </div>
</template>
