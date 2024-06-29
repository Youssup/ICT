<script setup lang="ts">
import Header from '@/components/template/Header.vue';
import SectionTemplate from '@/components/template/SectionTemplate.vue';


</script>

<template>
  <div>
    <Header 
      :title-one="'In cillum'"
      :blue-text="'irure aute'"
      :title-two="'amet sint'"
      :paragraph-text="'Qui qui adipisicing cillum labore. In consectetur excepteur consectetur dolore pariatur eu aliquip. Culpa ea fugiat reprehenderit elit incididunt laborum consequat aliqua nostrud commodo exercitation veniam. Amet excepteur laboris excepteur excepteur deserunt culpa officia. Veniam do sit eiusmod ex ipsum sit laborum nisi cupidatat consectetur. Proident excepteur nisi excepteur mollit culpa anim.'"
      :image-folder="'misc'"
      :image-name="'dummy.png'"
    />
    <SectionTemplate 
      :cards="[
        {
          imageFolder: 'misc',
          imageName: 'dummy.png',
          header: 'Officia do ut sunt pariatur aliqua culpa.',
          text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
          position: 'left'
        },
        {
          imageFolder: 'misc',
          imageName: 'dummy.png',
          header: 'Amet ullamco sunt ea deserunt deserunt elit labore aliquip.',
          text: 'Esse aliquip consequat occaecat ad. Cillum nisi nisi culpa nostrud eiusmod minim officia elit anim consectetur. Ullamco nostrud quis et sit occaecat enim pariatur. Non anim minim cillum voluptate est velit nostrud eu fugiat fugiat anim aliquip minim nisi. Labore velit amet consectetur aute mollit ad ut.',
          position: 'right'
        },
        {
            imageFolder: 'misc',
            imageName: 'dummy.png',
            header: 'Officia do ut sunt pariatur aliqua culpa.',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
            position: 'left'
          },
          {
            imageFolder: 'misc',
            imageName: 'dummy.png',
            header: 'Amet ullamco sunt ea deserunt deserunt elit labore aliquip.',
            text: 'Esse aliquip consequat occaecat ad. Cillum nisi nisi culpa nostrud eiusmod minim officia elit anim consectetur. Ullamco nostrud quis et sit occaecat enim pariatur. Non anim minim cillum voluptate est velit nostrud eu fugiat fugiat anim aliquip minim nisi. Labore velit amet consectetur aute mollit ad ut.',
            position: 'right'
          }
      ]"
    />

  </div>
</template>

<style scoped>

</style>