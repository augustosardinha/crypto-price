<template>
  <div
    class="ml-4 h-8 w-8
  flex items-center justify-center
  rounded-full font-bold text-sm text-purple-50
  border-2 border-purple-200"
  >
    <span class="animate-countdown">{{ counter }}</span>
  </div>
</template>

<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'
import { mutationsName } from '../store/mutations'

const counter = ref(10)
const store = useStore()
const countdownInterval = computed(() => store.state.countdownInterval)

const interval = setInterval(() => {
  counter.value--
  if (!countdownInterval.value) {
    if (counter.value < 0) {
      counter.value = 10
    }
  } else {
    counter.value = 10
    store.commit(mutationsName.SET_COUNTDOWN_INTERVAL)
  }
}, 1000)

onUnmounted(() => {
  clearInterval(interval)
})
</script>
