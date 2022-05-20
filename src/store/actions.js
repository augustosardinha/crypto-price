import { api } from '../services/api'
import { handleFormatDate, handleFormatPrice } from '../utils/formatters'
import { mutationsName } from '../store/mutations'

export const actionsName = {
  setCryptoInfo: 'setCryptoInfo',
  setHistoryInfo: 'setHistoryInfo'
}

export const actions = {
  setCryptoInfo: async ({ commit, state }, payload) => {
    try {
      const { data } = await api.get(payload)

      state.currentCrypto.id = data.id
      state.currentCrypto.name = data.name
      state.currentCrypto.symbol = data.symbol.toUpperCase()
      state.currentCrypto.currentPrice = handleFormatPrice(data.market_data.current_price.brl)
      state.currentCrypto.source = data.image.large

      commit(mutationsName.SET_CURRENT_CRYPTO, state.currentCrypto.id)
    } catch (error) {
      console.error(error.message)
    }
  },
  setHistoryInfo: async ({ commit, state }, payload) => {
    state.history.date = handleFormatDate(payload)
    const crypto = state.currentCrypto.id
    const date = state.history.date

    try {
      const { data } = await api.get(`${crypto}/history?date=${date}`)
      state.history.price = handleFormatPrice(data.market_data.current_price.brl, 2)

      commit(mutationsName.SET_HISTORY, state.history)
    } catch (error) {
      console.error(error.message)
    }
  }
}
