import { reactive } from "vue";
const state = reactive({
  transactionDatabase: [
    {
      id: 0,
      transactionName: "Transaction 0",
      date: "Aug 2, 2024",
      transactionType: "income",
      amount: 200,
    },
  ],
});

export default state;
