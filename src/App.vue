<script setup lang="ts">
import Header from "./components/Header.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="p-0 m-0 bg-slate-50">
    <Header />
    <RouterView />
  </div>
</template>

<style>
* {
  font-family: "Inter", sans-serif;
}
</style>
