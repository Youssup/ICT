<script setup lang="ts">
  import type {Card} from 'src/interfaces/Card'
  import { ref, type PropType, onUpdated } from 'vue';
  import CardBlock from './CardBlock.vue';

  let count = ref(0)
  

  defineProps({
    cards: Object as PropType<Card[]>,
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
        :image="card.image"
        :position="'left'"
      />
      <!-- <CardBlock id="countId" v-if="count % 2 != 0"
        :headerText="card.header"
        :mainText="card.text"
        :image="card.image"
        :position="'right'"
      /> -->
    </div>
  </section>
</template>