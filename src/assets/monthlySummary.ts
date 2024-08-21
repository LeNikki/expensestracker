import state from "./database";
import { computed } from "vue";
import type { MonthlySummaryType, TransactionData } from "../types/interfaces";
// Create a computed property for MonthlySummary
const MonthlySummary = computed<MonthlySummaryType>(() => ({
  January: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Jan")
  ),
  February: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Feb")
  ),
  March: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Mar")
  ),
  April: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Apr")
  ),
  May: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("May")
  ),
  June: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Jun")
  ),
  July: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Jul")
  ),
  August: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Aug")
  ),
  September: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Sep")
  ),
  October: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Oct")
  ),
  November: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Nov")
  ),
  December: state.transactionDatabase.filter((transaction: TransactionData) =>
    transaction.date.includes("Dec")
  ),
}));

export default MonthlySummary;
