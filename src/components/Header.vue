<template lang="">
  <div class="display-flex w-full p-7">
    <section
      class="flex flex-row justify-between md:justify-start items-center l"
    >
      <img :src="expensesmain_logo" alt="expensesmainlogo" class="w-10" />
      <h1 class="text-center font-semibold text-md md:text-xl">
        Expenses Tracker
      </h1>
      <p class="text-sm md:text-sm text-slate-600 ml-10">made with VUEJS</p>
    </section>
  </div>
</template>
<script setup lang="ts">
import expensesmain_logo from "../assets/expensesmain_logo.png";
</script>
