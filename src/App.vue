<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <a href="/">Praticar</a>
  <a href="/acompanhar">Acompanhar</a>

  <RouterView />
</template>

<style scoped>
header {
  background: yellow;
}
</style>
