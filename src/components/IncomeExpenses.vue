<template lang="">
  <div class="w-full flex flex-row justify-around mt-10">
    <div
      class="drop-shadow-xl h-40 w-1/4 p-2 m-2 bg-green-200 rounded-tl-xl rounded-br-xl"
    >
      <h1 class="text-center font-semibold">Income</h1>
      <p class="text-4xl text-center mt-6">P {{ totalIncome }}</p>
    </div>
    <div
      class="drop-shadow-xl h-40 w-1/4 p-2 m-2 bg-yellow-200 rounded-tl-xl rounded-br-xl"
    >
      <h1 class="text-center font-semibold">Current Balance</h1>
      <p class="text-4xl text-center mt-6">P {{ balance }}</p>
    </div>
    <div
      class="drop-shadow-xl h-40 w-1/4 p-2 m-2 bg-red-200 rounded-tl-xl rounded-br-xl"
    >
      <h1 class="text-center font-semibold">Expenses</h1>
      <p class="text-4xl text-center mt-6">P {{ totalExpenses }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
const props = defineProps({ income: Array, expenses: Array });
const totalIncome = ref(0);
const totalExpenses = ref(0);
const balance = ref(0);
watchEffect(() => {
  totalIncome.value = props.income.reduce((acc, item) => acc + item.amount, 0);
  totalExpenses.value = props.expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  balance.value = totalIncome.value - totalExpenses.value;
  console.log("Total Income: ", totalIncome.value);
  console.log("Total Expenses: ", totalExpenses.value);
  console.log("Balance: ", balance.value);
});
</script>
<style lang=""></style>
