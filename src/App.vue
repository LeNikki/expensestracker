<script setup lang="ts">
import Header from "./components/Header.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="p-0 m-0 bg-gradient-to-b from-slate-100 via-blue-300 to-blue-500">
    <Header />
    <RouterView />
    <p class="text-center text-sm pb-10 text-white font-semibold">
      Copyright@2024 Designed and Coded by Nicole P. Satiembre
    </p>
  </div>
</template>

<style>
* {
  font-family: "Inter", sans-serif;
}
</style>
