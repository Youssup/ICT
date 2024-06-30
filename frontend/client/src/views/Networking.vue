<script setup lang="ts">
import Header from '@/components/template/Header.vue';
import SectionTemplate from '@/components/template/SectionTemplate.vue';
</script>

<template>
  <div>
    <Header :title-one="'Find your'" :blue-text="'Networking Services'" :title-two="'with us'"
      :paragraph-text="'sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text'"
      :button-text="'Call to action'" :image-folder="'networking'" :image-name="'networking.png'" />
    <SectionTemplate :cards="[
      {
        imageFolder: 'networking',
        imageName: 'network1.jpg',
        header: 'Sample title',
        text: 'Networking as a professional service is a crucial component in the field of Information and Communications Technology. As organizations increasingly rely on complex networks to support their operations, the demand for professional networking services has surged. These services encompass a range of activities including the design, implementation, management, and optimization of network infrastructures. By leveraging professional networking services, businesses can ensure their networks are reliable, secure, and efficient, which is essential for maintaining seamless communication and data transfer.',
        position: 'left'
      },
      {
        imageFolder: 'networking',
        imageName: 'network2.jpg',
        header: 'Sample title',
        text: 'One of the primary benefits of professional networking services is the expertise and experience brought by our networking professionals. These experts have a deep understanding of networking technologies and best practices, enabling them to design robust network architectures tailored to the specific needs of an organization. This includes selecting the right hardware and software, configuring network components, and ensuring interoperability among various systems. With a well-designed network, businesses can achieve higher performance, better scalability, and improved resilience against failures and cyber threats.',
        position: 'right'
      }
    ]" />

  </div>
</template>

<style scoped></style>