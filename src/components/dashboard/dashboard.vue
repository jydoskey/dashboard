<template>
  <div class="home">
    <div class="text">Dashboard</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.home {
  position: relative;
  left: 250px;
  height: 100vh;
  width: calc(100% - 250px);
  margin: 0;
  transition: var(--tran-05);
}

.home .text {
    font-size: 30px;
    font-weight: 500;
    color: var(--text-color);
    padding: 8px 40px;
}

body {
    justify-content: start;
}
</style>