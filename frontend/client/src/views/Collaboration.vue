<script setup lang="ts">
import Header from '@/components/template/Header.vue';
import SectionTemplate from '@/components/template/SectionTemplate.vue';


</script>

<template>
  <div>
    <Header :title-one="'Find your'" :blue-text="'Collaboration Services'" :title-two="'with us'"
      :paragraph-text="'sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text'"
      :image-folder="'collaboration'" :image-name="'collaboration.png'" />
    <SectionTemplate :cards="[
      {
        imageFolder: 'misc',
        imageName: 'dummy.png',
        header: 'Sample title',
        text: 'sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text',
        position: 'left'
      },
      {
        imageFolder: 'misc',
        imageName: 'dummy.png',
        header: 'Sample title',
        text: 'sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text',
        position: 'right'
      },
    ]" />

  </div>
</template>

<style scoped></style>