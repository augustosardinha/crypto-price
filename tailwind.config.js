module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(3rem)' },
          '100%': { opacity: '1' }
        },
        comeIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1.0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        comeIn: 'comeIn 1s ease-in-out',
        countdown: 'comeIn 1s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
