<script setup lang="ts">
  import type {Card} from 'src/interfaces/Card'
  import {  type PropType } from 'vue';
  import CardBlock from './CardBlock.vue';
  

  defineProps({
    cards: Object as PropType<Card[]>
  })
</script>

<template>
  <!-- Should have a v-for loop that alternates between having the image on the left and right side -->
  <!-- Should get pased in an array that contains objects that each contain an image, headerText, mainText, and position value  -->

  <section class="w-full mx-auto py-10 :text-white">
    <div v-for="card in cards">
      <CardBlock 
        :headerText="card.header"
        :mainText="card.text"
        :imageName="card.imageName"
        :imageFolder="card.imageFolder"
        :position="card.position"
      />
    </div>
  </section>
</template>