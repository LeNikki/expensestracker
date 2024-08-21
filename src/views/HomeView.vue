<template>
  <div class="pb-20">
    <IncomeExpenses
      :income="income"
      :expenses="expenses"
      v-model:transactionMonth="transactionMonth"
    />
    <div class="flex flex-col items-center justify-center">
      <Transaction @addTransaction="addTransaction" />
      <History
        :income="income"
        :expenses="expenses"
        :transactionMonth="transactionMonth"
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
import MonthlySummary from "../assets/monthlySummary";
import type { TransactionData } from "../types/interfaces";

const income = ref([]);
const expenses = ref([]);
const transactionMonth = ref<string>("August");
const selectedTransactions = ref<TransactionData[]>([]);
const addTransaction = (clientData: TransactionData) => {
  state.transactionDatabase.push({
    id: clientData.id,
    transactionName: clientData.transactionName,
    date: clientData.date,
    transactionType: clientData.transactionType,
    amount: clientData.amount,
  });
};
const deleteTransaction = (itemID: number) => {
  const index = state.transactionDatabase.findIndex(
    (item: TransactionData) => item.id === itemID
  );
  state.transactionDatabase.splice(index, 1);
};
watchEffect(() => {
  income.value = [];
  expenses.value = [];
  selectedTransactions.value = MonthlySummary.value[transactionMonth.value];
  selectedTransactions.value.forEach((item: TransactionData) => {
    const list: TransactionData[] =
      item.transactionType == "income" ? income.value : expenses.value;
    list.push(item);
  });
});
</script>
../types/interfaces
