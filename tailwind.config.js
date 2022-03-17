module.exports = {
  content: ['./index.html','./src/**/*.{vue,js,ts}'],
  mode: 'jit',
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    preflight: false
  }
}
