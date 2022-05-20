<template>
  <section class="flex flex-col items-center gap-5 md:gap-10">
    <CryptoCard />
    <CryptoContainer v-once />
  </section>
</template>

<script setup>
import CryptoCard from '../components/CryptoCard.vue'
import CryptoContainer from '../components/CryptoContainer.vue'
</script>
