<script setup lang="ts">
import Header from "./components/Header.vue";

import Login from "./views/Login.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-slate-100 p-0 m-0">
    <Header />
    <RouterView />
  </div>
</template>
