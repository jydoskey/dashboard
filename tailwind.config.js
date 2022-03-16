module.exports = {
  purge: ['./index.html','./src/**/*.{vue,js,ts}'],
  mode: 'jit',
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
