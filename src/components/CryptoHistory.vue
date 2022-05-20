<template>
  <div class="flex flex-col gap-5">
    <h2 class="text-white">
      <span class="font-semibold">{{ currentCrypto.name }}</span> value on
      <span class="font-semibold">{{ history.date }}</span> :
    </h2>
    <h3 class="font-bold text-center text-white text-3xl">
      {{ history.price }}
    </h3>
    <button
      class="py-3 px-12 font-semibold text-sm  text-white rounded shadow-lg bg-yellow-600 hover:bg-yellow-500"
      @click="handleClick"
    >
      BACK
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { mutationsName } from '../store/mutations'

const store = useStore()
const history = computed(() => store.getters.getHistory)
const currentCrypto = computed(() => store.getters.getCurrentCrypto)

const handleClick = () => store.commit(mutationsName.CLEAR_HISTORY)

</script>
