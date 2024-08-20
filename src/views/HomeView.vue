<template>
  <div class="pb-20">
    <IncomeExpenses :income="income" :expenses="expenses" />
    <div class="flex flex-col items-center justify-center">
      <Transaction @addTransaction="addTransaction" />
      <History
        :income="income"
        :expenses="expenses"
        @deleteTransaction="deleteTransaction"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import IncomeExpenses from "../components/IncomeExpenses.vue";
import Transaction from "../components/Transaction.vue";
import History from "../components/History.vue";
import state from "../assets/database";
import type { TransactionData } from "../assets/interfaces";
const transactionList = ref<TransactionData[]>(state.transactionDatabase);
const income = ref([]);
const expenses = ref([]);

const addTransaction = (clientData: TransactionData) => {
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
const deleteTransaction = (itemID: number) => {
  const index = state.transactionDatabase.findIndex(
    (item: TransactionData) => item.id === itemID
  );
  state.transactionDatabase.splice(index, 1);
  transactionList.value = [...state.transactionDatabase];
};
watchEffect(() => {
  income.value = [];
  expenses.value = [];

  transactionList.value.forEach((item: TransactionData) => {
    const list: TransactionData[] =
      item.transactionType == "income" ? income.value : expenses.value;
    list.push(item);
  });
});
</script>
