<script setup lang="ts">
  defineProps({
    titleOne: String,
    blueText: String,
    titleTwo: String,
    paragraphText: String,
    image: String,
    buttonText: String
  })

</script>

<template>
  
  <div class="flex flex-wrap" style="background: linear-gradient(to top, transparent 60%, white 100%);">
    <div class="w-full sm:w-8/12 mb-10">
      <div class="container mx-auto h-full sm:p-10">
        <nav class="flex px-4 justify-between items-center"></nav>
          <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold"> 
                  {{ titleOne }} 
                  <span class="text-blue-700"> {{ blueText }} </span> 
                  {{titleTwo}}
                </h1>
                <div class="w-20 h-2 bg-blue-700 my-4"></div>
                <p class="text-xl mb-10">
                  {{paragraphText}}
                  </p>
                <button class="bg-blue-500 text-white text-2xl font-medium px-4 py-2 rounded shadow"> {{ buttonText }} </button>
            </div>
          </header>
      </div>
    </div>
  </div>
</template>