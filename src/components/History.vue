<template lang="">
  <div class="w-3/4 mt-10">
    <h1 class="text-center font-bold text-xl mb-10">Transaction History</h1>

    <div
      class="flex flex-row justify-around bg-white p-10 shadow shadow-2xl rounded-2xl"
    >
      <section class="income-section">
        <h3 class="font-semibold">Income</h3>
        <table>
          <tr>
            <th>Date</th>
            <th>Transaction Name</th>
            <th>Amount</th>
            <th></th>
          </tr>
          <tr v-for="item in income" :key="item.id">
            <td>{{ item.date }}</td>
            <td>{{ item.transactionName }}</td>
            <td>{{ item.amount }}</td>
            <td>
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
        <h3 class="font-semibold">Expenses</h3>
        <table>
          <tr>
            <th>Date</th>
            <th>Transaction Name</th>
            <th>Amount</th>
            <th></th>
          </tr>
          <tr v-for="item in expenses" :key="item.id">
            <td>{{ item.date }}</td>
            <td>{{ item.transactionName }}</td>
            <td>{{ item.amount }}</td>
            <td>
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

<script setup>
import { ref, watchEffect } from "vue";
const props = defineProps({ income: Array, expenses: Array });
const income = ref(props.income);
const expenses = ref(props.expenses);
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
