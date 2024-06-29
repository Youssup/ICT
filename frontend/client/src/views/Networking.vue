<script setup lang="ts">
  import Header from '@/components/template/Header.vue';
  import SectionTemplate from '@/components/template/SectionTemplate.vue';
</script>

<template>
    <div>
        <!-- <body class="bg-gradient-to-tr from-blue-700 to-purple-700 text-white flex items-center justify-center min-h-screen">

<div class="container mx-auto p-6 space-y-10">


  <header class="text-center">
    <h1 class="text-5xl font-bold mb-4">Networking Services</h1>
    <p class="text-xl font-light">Ensuring Reliable, Secure, and Efficient Networks for Businesses</p>
  </header>


  <main class="grid grid-cols-1 lg:grid-cols-3 gap-10">


    <div class="lg:col-span-2 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-semibold mb-6">Why Choose Professional Networking Services?</h2>
      <p class="mb-4">Networking as a professional service is a crucial component in the field of Information and Communications Technology. As organizations increasingly rely on complex networks to support their operations, the demand for professional networking services has surged.</p>
      <p class="mb-4">These services encompass a range of activities including the design, implementation, management, and optimization of network infrastructures. By leveraging professional networking services, businesses can ensure their networks are reliable, secure, and efficient, which is essential for maintaining seamless communication and data transfer.</p>
      <p class="mb-4">One of the primary benefits of professional networking services is the expertise and experience brought by our networking professionals. These experts have a deep understanding of networking technologies and best practices, enabling them to design robust network architectures tailored to the specific needs of an organization.</p>
    </div>


    <div class="flex items-center justify-center">
      <img src="https://images.unsplash.com/photo-1562157871-b35ed9bcdfb3" alt="Networking Image" class="rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
    </div>
    
  </main>

</div>

</body> -->
    </div>

    <div>
      <Header 
        :title-one="''"
        :blue-text="'Networking Services'"
        :title-two="'Ensuring Reliable, Secure, and Efficient Networks for Businesses'"
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