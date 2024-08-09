<template lang="">
  <div class="w-1/4 mt-10 ml-20">
    <h1 class="text-center font-bold text-xl">Add Transaction</h1>
    <form
      @submit.prevent="$emit('addTransaction', clientData)"
      class="flex flex-col mt-10"
    >
      <label for="date" class="font-semibold mt-2">Select Date:</label>
      <VueDatepickerUi lang="en" id="date" v-model="selectedDate" />
      <p>Selected Date: {{ formattedDate }}</p>
      <label for="transaction" class="font-semibold"
        >Please Select Transaction</label
      >
      <select
        v-model="clientData.transactionType"
        id="transaction"
        class="w-60 p-2"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <label for="transactionName" class="font-semibold mt-2"
        >Transaction Name:</label
      >
      <input
        v-model="clientData.transactionName"
        id="transactionName"
        placeholder="Transaction Name"
        class="w-60 p-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
      />
      <label for="amount" class="font-semibold mt-2">Amount:</label>
      <input
        type="number"
        v-model="clientData.amount"
        id="amount"
        placeholder="Amount"
        class="w-60 p-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
      />
      <button
        type="submit"
        class="w-44 p-2 mt-2 bg-green-600 text-white drop-shadow-xl rounded-lg hover:font-semibold"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import "vue-datepicker-ui/lib/vuedatepickerui.css";
import VueDatepickerUi from "vue-datepicker-ui";
import state from "../assets/database";
const selectedDate = ref(new Date());

const formattedDate = computed(() => {
  const date = selectedDate.value;
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
});

const clientData = reactive({
  id: computed(() => state.transactionDatabase.length),
  transactionName: "",
  date: formattedDate,
  transactionType: "",
  amount: 0,
});
</script>
