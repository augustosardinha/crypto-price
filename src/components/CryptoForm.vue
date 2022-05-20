<template>
  <form
    class="flex flex-col"
    @submit.prevent="handleSubmit"
  >
    <input
      v-model="date"
      type="date"
      class="p-3 cursor-pointer rounded-lg bg-purple-900 text-purple-200"
    >
    <div class="h-12">
      <p
        v-show="error"
        class="mt-2 w-42 font-semibold text-sm text-purple-100"
      >
        {{ error }}
      </p>
    </div>
    <div class="flex justify-center gap-5">
      <router-link
        to="/crypto-price/"
        class="py-3 px-12 rounded shadow-lg font-semibold text-sm  text-white bg-purple-700 hover:bg-purple-600"
      >
        BACK
      </router-link>
      <button
        class="py-3 px-12 rounded shadow-lg font-semibold text-sm text-white bg-yellow-600 hover:bg-yellow-500"
      >
        SHOW
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, onUpdated } from 'vue'
import { useStore } from 'vuex'
import { actionsName } from '../store/actions'

const error = ref(null)
const date = ref(null)
const store = useStore()

const handleSubmit = () => {
  if (!date.value) {
    error.value = 'Please, select a date'
    return
  }
  store.dispatch(actionsName.setHistoryInfo, date.value)
}

onUpdated(() => {
  const today = +(new Date())
  const selectedDate = +(new Date(date.value))
  if (selectedDate) {
    if (selectedDate > today) {
      error.value = 'Please, select a valid date'
      return
    }
    error.value = null
  }
})

</script>
