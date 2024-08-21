<template lang="">
  <div class="display-flex justify-center items-center w-full p-7">
    <section class="flex flex-row w-1/4 justify-between items-center">
      <img :src="expensesmain_logo" alt="expensesmainlogo" class="w-10" />
      <h1 class="text-center font-semibold text-xl">Expenses Tracker</h1>
      <p class="text-sm text-slate-600">made with VUEJS</p>
    </section>
  </div>
</template>
<script setup lang="ts">
import expensesmain_logo from "../assets/expensesmain_logo.png";
</script>

