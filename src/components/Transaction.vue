<template>
  <div
    class="w-1/2 flex flex-col items-center mt-10 ml-20 p-10 drop-shadow-lg rounded-2xl bg-white"
  >
    <h1 class="text-center font-semibold text-blue-600">Add Transaction</h1>
    <form
      @submit.prevent="$emit('addTransaction', clientData)"
      class="flex flex-col items-center"
    >
      <section class="flex flex-row items-center flex-wrap justify-center">
        <section class="flex flex-col p-3">
          <label for="date" class="mt-2">Select Date:</label>
          <VueDatepickerUi
            lang="en"
            id="date"
            v-model="selectedDate"
            class="border border-1 border-blue-600 rounded-lg"
          />

          <label for="transaction">Please Select Transaction</label>
          <select
            v-model="clientData.transactionType"
            id="transaction"
            class="w-60 p-2 border border-1 border-blue-600 rounded-md drop-shadow-sm"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </section>
        <section class="flex flex-col p-3">
          <label for="transactionName" class="mt-2">Transaction Name:</label>
          <input
            v-model="clientData.transactionName"
            id="transactionName"
            placeholder="Transaction Name"
            class="w-60 p-2.5 border-blue-600 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600 border border-1"
          />
          <label for="amount" class="mt-2">Amount:</label>
          <input
            type="number"
            v-model="clientData.amount"
            id="amount"
            placeholder="Amount"
            class="w-60 border-blue-600 p-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600 border border-1"
          />
        </section>
      </section>
      <button
        type="submit"
        class="w-44 p-2 mt-2 bg-blue-500 hover:bg-blue-700 text-white drop-shadow-xl rounded-lg hover:"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import type { TransactionData } from "../types/interfaces";
import "vue-datepicker-ui/lib/vuedatepickerui.css";
import VueDatepickerUi from "vue-datepicker-ui";
import state from "../assets/database";
const selectedDate = ref<Date>(new Date());

const formattedDate = computed<string>(() => {
  const date = selectedDate.value;
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
});

const clientData = reactive({
  id: computed(() => state.transactionDatabase.length),
  transactionName: "Product",
  date: formattedDate,
  transactionType: "income",
  amount: 0,
});
</script>
