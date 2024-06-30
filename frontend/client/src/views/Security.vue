<script setup lang="ts">
import SectionTemplate from '../components/template/SectionTemplate.vue';
import Header from '@/components/template/Header.vue';



</script>

<template>
  <div>
    <Header :title-one="'Find your'" :blue-text="'Security Services'" :title-two="'with us'"
      :paragraph-text="'sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text'"
      :button-text="'Call to action'" :image-folder="'security'" :image-name="'security.png'" />
    <SectionTemplate :cards="[
      {
        imageFolder: 'security',
        imageName: 'security1.jpg',
        header: 'sample title',
        text: 'As technology advances, the need for robust and dependable cybersecurity becomes more critical. Our team has decades of experience in the IT sector, allowing us to stay ahead of these changes.',
        position: 'left'
      },
      {
        imageFolder: 'security',
        imageName: 'secuirty2.jpg',
        header: 'sample title',
        text: 'Our cybersecurity solutions are comprehensive and specifically tailored for K-12 educational settings. We address the unique challenges that schools face in protecting their digital infrastructure. Our services include threat detection, prevention, and response strategies. We also offer ongoing support and training to ensure schools remain secure. By partnering with us, schools can focus on education while we handle their cybersecurity needs. Our commitment is to provide peace of mind through advanced, reliable protection for K-12 campuses.',
        position: 'right'
      }
    ]" />

  </div>
</template>

<style scoped></style>