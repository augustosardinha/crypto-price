import Bitcoin from '../assets/bitcoin.png'

export const state = {
  currentCrypto: {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    currentPrice: 'R$ 148.119,00',
    source: Bitcoin
  },
  countdownInterval: true,
  history: {
    date: '',
    price: ''
  }
}
