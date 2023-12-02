<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <a href="/#">Praticar</a>
  <a href="/#/acompanhar">Acompanhar</a>

  <RouterView />
</template>

<style scoped>
header {
  background: yellow;
}
</style>
