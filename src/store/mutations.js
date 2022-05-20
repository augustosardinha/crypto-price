export const mutationsName = {
  SET_CURRENT_CRYPTO: 'SET_CURRENT_CRYPTO',
  SET_HISTORY: 'SET_HISTORY',
  SET_COUNTDOWN_INTERVAL: 'SET_COUNTDOWN_INTERVAL',
  CLEAR_HISTORY: 'CLEAR_HISTORY'
}

export const mutations = {
  SET_CURRENT_CRYPTO: (state, payload) => {
    state.currentCrypto.id = payload
  },
  SET_HISTORY: (state, payload) => {
    state.history = payload
  },
  SET_COUNTDOWN_INTERVAL: (state) => {
    state.countdownInterval = !state.countdownInterval
  },
  CLEAR_HISTORY: (state) => {
    state.history.date = ''
    state.history.price = ''
  }
}
