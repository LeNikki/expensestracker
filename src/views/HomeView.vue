<template lang="">
  <div class="pb-20">
    <IncomeExpenses :income="income" :expenses="expenses" />
    <div class="w-full flex flex-row justify-around">
      <Transaction @addTransaction="addTransaction" />
      <History
        :income="income"
        :expenses="expenses"
        @deleteTransaction="deleteTransaction"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import IncomeExpenses from "../components/IncomeExpenses.vue";
import Transaction from "../components/Transaction.vue";
import History from "../components/History.vue";
import state from "../assets/database";
const transactionList = ref(state.transactionDatabase);
const income = ref([]);
const expenses = ref([]);

const addTransaction = (clientData) => {
  state.transactionDatabase.push({
    id: clientData.id,
    transactionName: clientData.transactionName,
    date: clientData.date,
    transactionType: clientData.transactionType,
    amount: clientData.amount,
  });
  transactionList.value = [...state.transactionDatabase];
  console.log("Item Id added: ", clientData.id);
};
const deleteTransaction = (itemID) => {
  const index = state.transactionDatabase.findIndex(
    (item) => item.id === itemID
  );
  state.transactionDatabase.splice(index, 1);
  transactionList.value = [...state.transactionDatabase];
  //console.log("Index to be deleted: ", index);
  // if (index !== -1) {
  //   state.transactionDatabase.splice(index, 1);
  // }
};
watchEffect(() => {
  income.value = [];
  expenses.value = [];

  transactionList.value.forEach((item) => {
    const list =
      item.transactionType == "income" ? income.value : expenses.value;
    list.push(item);
  });
});
</script>
