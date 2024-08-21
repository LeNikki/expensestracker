export interface TransactionData {
  id: number;
  transactionName: string;
  date: string;
  transactionType: string;
  amount: number;
}

export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface MonthlySummaryType {
  [key: string]: TransactionData[];
}
