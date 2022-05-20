<template>
  <div
    class="flex flex-col gap-8 md:flex-row items-center
      p-8 md:p-16
      shadow-2xl rounded-lg
      bg-purple-800"
  >
    <img
      class="w-24 h-24 md:w-36 md:h-36"
      :src="currentCrypto.source"
      :alt="currentCrypto.name"
    >
    <div class="w-60 flex flex-col items-center md:items-start gap-4">
      <h1 class="flex items-center gap-3 font-bold">
        <span class="text-3xl md:text-4xl text-purple-50">
          {{ currentCrypto.name }}
        </span>
        <span class="text-sm text-purple-300">
          ({{ currentCrypto.symbol }})
        </span>
      </h1>
      <div class="flex">
        <h2 class=" text-3xl font-semibold animate-comeIn text-purple-100">
          {{ currentCrypto.currentPrice }}
        </h2>
        <CardCountdown />
      </div>
      <router-link
        :to="`/crypto/${currentCrypto.id}/history`"
        class="py-2 px-4 font-semibold text-sm rounded shadow-lg hover:scale-105
        text-purple-50 bg-purple-600 hover:bg-purple-500"
      >
        PRICE HISTORY
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, onUpdated } from 'vue'
import { useStore } from 'vuex'
import { actionsName } from '../store/actions'
import CardCountdown from './CardCountdown.vue'

const store = useStore()
const currentCrypto = computed(() => store.getters.getCurrentCrypto)
const getCurrentCryptoInfo = () => {
  return store.dispatch(actionsName.setCryptoInfo, currentCrypto.value.id)
}

const interval = setInterval(() => {
  getCurrentCryptoInfo()
}, 10000)

onMounted(() => {
  getCurrentCryptoInfo()
})

onUpdated(() => {
  getCurrentCryptoInfo()
})

onUnmounted(() => clearInterval(interval))

</script>
