<template>
  <div>
    <h1 class="text-center text-xl">Transaction Summary</h1>
    <div class="w-full flex flex-row justify-around mt-10">
      <div
        class="drop-shadow-xl h-40 w-1/4 p-2 m-2 bg-gradient-to-r from-green-700 via-green-500 to-green-900 text-white border border-10 rounded-2xl"
      >
        <h1 class="text-center">Income</h1>

        <p class="text-4xl text-center mt-6">P {{ totalIncome }}</p>
      </div>
      <div
        class="drop-shadow-xl h-40 w-1/4 p-2 m-2 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-900 text-white border border-10 rounded-2xl"
      >
        <h1 class="text-center">Current Balance</h1>

        <p class="text-4xl text-center mt-6">P {{ balance }}</p>
      </div>
      <div
        class="drop-shadow-xl h-40 w-1/4 p-2 m-2 bg-gradient-to-r from-red-700 via-red-500 to-red-900 text-white border border-10 rounded-2xl"
      >
        <h1 class="text-center">Expenses</h1>

        <p class="text-4xl text-center mt-6">P {{ totalExpenses }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { TransactionData } from "../assets/interfaces";
const props = defineProps<{
  income: TransactionData[];
  expenses: TransactionData[];
}>();
const totalIncome = ref<number>(0);
const totalExpenses = ref<number>(0);
const balance = ref<number>(0);
watchEffect(() => {
  totalIncome.value = props.income.reduce(
    (acc: number, item: TransactionData) => acc + item.amount,
    0
  );
  totalExpenses.value = props.expenses.reduce(
    (acc: number, item: { amount: number }) => acc + item.amount,
    0
  );
  balance.value = totalIncome.value - totalExpenses.value;
  console.log("Total Income: ", totalIncome.value);
  console.log("Total Expenses: ", totalExpenses.value);
  console.log("Balance: ", balance.value);
});
</script>
