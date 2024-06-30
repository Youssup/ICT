<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import './assets/main.css'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-gray-200">
    <header>
      <nav>
        <Navbar />
      </nav>
    </header >
    <RouterView />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
</style>