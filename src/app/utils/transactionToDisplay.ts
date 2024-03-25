import { Transaction } from '../models/Transaction';

export interface ITransactionDisplay {
  dataLabel: string;
  transactions: Transaction[];
}

export function transactionToDisplay(
  transactions: Transaction[]
): ITransactionDisplay[] {
  const today = new Date(); // Data de hoje
  const yesterday = new Date(today); // Data de ontem
  yesterday.setDate(today.getDate() - 1);

  const groupedTransactions: { [key: string]: Transaction[] } = {};
  // Agrupa as transações por data
  transactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionDay = transactionDate.getDate();
    const transactionMonth = transactionDate.getMonth();
    const transactionYear = transactionDate.getFullYear();

    let dateLabel: string;

    if (
      transactionYear === today.getFullYear() &&
      transactionMonth === today.getMonth() &&
      transactionDay === today.getDate()
    ) {
      dateLabel = 'Hoje';
    } else if (
      transactionYear === yesterday.getFullYear() &&
      transactionMonth === yesterday.getMonth() &&
      transactionDay === yesterday.getDate()
    ) {
      dateLabel = 'Ontem';
    } else {
      // Formata a data como "DD de MMMM"
      const formattedDate = transactionDate.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
      });
      dateLabel = formattedDate;

      // Adiciona o ano ao dateLabel se a transação não for do ano atual
      if (transactionYear !== today.getFullYear()) {
        dateLabel += ` ${transactionYear}`;
      }
    }

    if (!groupedTransactions[dateLabel]) {
      groupedTransactions[dateLabel] = [];
    }
    groupedTransactions[dateLabel].push(transaction);
  });

  // Converte o objeto de transações agrupadas em um array de ITransactionDisplay
  const transactionsDisplay: ITransactionDisplay[] = Object.entries(
    groupedTransactions
  ).map(([dataLabel, transactions]) => ({
    dataLabel,
    transactions,
  }));

  return transactionsDisplay;
}

export function sortTransactionsByDate(
  transactions: Transaction[]
): Transaction[] {
  return transactions.length
    ? transactions
        .slice()
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : transactions;
}
