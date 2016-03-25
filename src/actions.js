"use strict"

export const ADD_TRANSACTION = (transaction, prevTransactions, prevBalance) => {
  let newTransactions = prevTransactions.slice()
  newTransactions.push(transaction)

  return {
    type: "ADD_TRANSACTION",
    data: {
      currentBalance: parseFloat(prevBalance) + parseFloat(transaction),
      transactions: newTransactions
    }
  }
}
