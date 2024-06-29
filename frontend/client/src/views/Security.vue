<script setup lang="ts">
import SectionTemplate from '../components/template/SectionTemplate.vue';
import CardBlock from '@/components/template/CardBlock.vue';



</script>

<template>
  <div>
    <CardBlock 
      :image-folder="'managed-services'"
      :image-name="'account.jpg'"
      :header-text="'Unified Communications Strategy and Planning'"
      :main-text="'Our experts work closely with your team to develop a robust UC strategy that aligns with your business objectives. We assess your current infrastructure, identify gaps, and design a roadmap to ensure seamless integration and scalability.'"
      :position="'left'"
    />

    <CardBlock 
      :header-text="'Unified Communications Strategy and Planning'"
      :main-text="'Our experts work closely with your team to develop a robust UC strategy that aligns with your business objectives. We assess your current infrastructure, identify gaps, and design a roadmap to ensure seamless integration and scalability.'"
      :position="'right'" 
    />

    <SectionTemplate
      :cards="[
        {
          imageFolder: 'managed-services',
          imageName: 'account.jpg',
          header: 'hello',
          text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
        },
        {
          imageFolder: 'misc/',
          imageName: 'bg.jpg',
          header: 'goodbye',
          text: 'Deserunt cupidatat magna magna sit labore nisi duis esse laborum nulla. Veniam occaecat mollit labore nisi do. Eu amet ipsum elit cillum eu occaecat exercitation sint labore tempor. Proident ex ullamco qui elit. Ea anim ullamco reprehenderit culpa dolor ea consequat pariatur sint.'
        }
      
      ]"
    />


  </div>
</template>

<style scoped>

</style>