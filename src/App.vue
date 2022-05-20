<script setup>
import Header from './components/HeaderApp.vue'
</script>

<template>
  <div class="w-screen h-screen bg-gradient-to-b from-purple-800 to-purple-600 font-poppins">
    <Header />
    <main class="flex flex-col items-center justify-center h-5/6 gap-12">
      <router-view />
    </main>
  </div>
</template>
