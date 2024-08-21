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

<!-- Welcome user -->
<!-- <section class="flex justify-between w-56 items-center mt-10 ml-10">
  <div
    class="w-16 h-16 p-2 border border-10 bg-white drop-shadow-xl rounded-full flex justify-center items-center"
  >
    pic
  </div>
  <p class="font-bold">Welcome User!</p>
</section> -->
