<template>
  <div class="w-3/4 mt-10 bg-white p-10 shadow shadow-lg rounded-2xl">
    <h1 class="text-center mb-10 text-blue-600 font-semibold">
      Transaction History for month: {{ transactionMonth }}
    </h1>

    <div class="flex flex-row justify-around">
      <section class="income-section">
        <h3 class="">Income</h3>
        <table>
          <tr>
            <th>Date</th>
            <th>Transaction Name</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
          <tr v-for="item in income" :key="item.id">
            <td>{{ item.date }}</td>
            <td>{{ item.transactionName }}</td>
            <td>{{ item.amount }}</td>
            <td class="text-center">
              <i
                class="fa fa-trash"
                aria-hidden="true"
                @click="$emit('deleteTransaction', item.id)"
              ></i>
            </td>
          </tr>
        </table>
      </section>

      <section class="expenses-section">
        <h3 class="">Expenses</h3>
        <table>
          <tr>
            <th>Date</th>
            <th>Transaction Name</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
          <tr v-for="item in expenses" :key="item.id">
            <td>{{ item.date }}</td>
            <td>{{ item.transactionName }}</td>
            <td>{{ item.amount }}</td>
            <td class="text-center">
              <i
                class="fa fa-trash"
                aria-hidden="true"
                @click="$emit('deleteTransaction', item.id)"
              ></i>
            </td>
          </tr>
        </table>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { TransactionData } from "../types/interfaces";
const props = defineProps<{
  income: TransactionData[];
  expenses: TransactionData[];
  transactionMonth: string;
}>();
const income = ref<TransactionData[]>(props.income);
const expenses = ref<TransactionData[]>(props.expenses);
watchEffect(() => {
  income.value = [...props.income];
  expenses.value = [...props.expenses];
});
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.income-section,
.expenses-section {
  height: 20em;
  overflow-y: scroll;
}
</style>
