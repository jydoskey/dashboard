module.exports = {
  content: ['./index.html','./src/**/*.{vue,js,ts}'],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    preflight: false
  }
}
