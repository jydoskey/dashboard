<template>
    <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
@import '@/assets/base.css';

#app {
  @apply text-center py-10
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
    justify-content: center;
  }

  #app {
    margin: 0 auto;
    display: flex;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
