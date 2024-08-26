<template>
  <div>
    <section>
      <h1 class="text-center text-md md:text-xl font-semibold">
        Transaction Summary
      </h1>
      <section class="flex items-center justify-center mt-10">
        <p>Pick month:</p>
        <select
          class="w-36 md:w-56 ml-10 p-3 border border-1 border-blue-500 rounded-xl"
          v-model="transactionMonth"
        >
          <option v-for="month in Months" :key="month" :value="month">
            {{ month }}
          </option>
        </select>
      </section>
    </section>

    <div class="w-full flex flex-row justify-around mt-10">
      <div
        class="drop-shadow-xl h-24 md:h-40 w-1/4 p-2 m-2 bg-blue-400 text-white border border-10 rounded-2xl"
      >
        <h1 class="text-center text-xs md:text-lg">Income</h1>

        <p class="text-md md:text-4xl text-center mt-2 md:mt-6">
          P {{ totalIncome }}
        </p>
      </div>
      <div
        class="drop-shadow-xl h-24 md:h-40 w-1/4 p-2 m-2 bg-blue-600 text-white border border-10 rounded-2xl"
      >
        <h1 class="text-center text-xs md:text-lg">Current Balance</h1>

        <p class="text-md md:text-4xl text-center mt-2 md:mt-6">
          P {{ balance }}
        </p>
      </div>
      <div
        class="drop-shadow-xl h-24 md:h-40 w-1/4 p-2 m-2 bg-blue-900 text-white border border-10 rounded-2xl"
      >
        <h1 class="text-center text-xs md:text-lg">Expenses</h1>

        <p class="text-md md:text-4xl text-center mt-2 md:mt-6">
          P {{ totalExpenses }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { TransactionData } from "../types/interfaces";
import { Months } from "../types/interfaces";
const props = defineProps<{
  income: TransactionData[];
  expenses: TransactionData[];
}>();
const transactionMonth = defineModel("transactionMonth");
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

watchEffect(() => console.log(transactionMonth.value));
</script>
../types/interfaces../types/interfaces
