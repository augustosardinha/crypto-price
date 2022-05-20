<template>
  <section class="animate-fadeIn flex flex-col p-5 md:p-10 rounded-lg bg-purple-800">
    <h1 class="mb-6 text-2xl md:text-3xl text-center text-purple-50 font-semibold">
      {{ currentCrypto.name }} History
    </h1>
    <CryptoHistory v-if="history.price" />
    <CryptoForm v-else />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CryptoHistory from '../components/CryptoHistory.vue'
import CryptoForm from '../components/CryptoForm.vue'

const store = useStore()
const history = computed(() => store.getters.getHistory)
const currentCrypto = computed(() => store.getters.getCurrentCrypto)

</script>
