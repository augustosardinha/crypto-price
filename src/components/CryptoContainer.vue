<template>
  <div class="flex gap-5">
    <img
      v-for="crypto in cryptos"
      :key="crypto.id"
      class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 cursor-pointer
        opacity-60 hover:opacity-100 hover:animate-bounce"
      :src="crypto.source"
      :alt="crypto.alt"
      @click="changeCrypto(crypto.id)"
    >
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { mutationsName } from '../store/mutations'
import { cryptos } from '../utils/cryptos'

const store = useStore()
const changeCrypto = (crypto) => {
  if (crypto === store.state.currentCrypto.id) return

  store.commit(mutationsName.SET_CURRENT_CRYPTO, crypto)
  store.commit(mutationsName.SET_COUNTDOWN_INTERVAL)
}
</script>
