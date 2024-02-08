const expenses = {
    "groceries": 150,
    "dining out": 100,
    "transportation": 50,
    "entertainment": 80
}

const expenseTotal = Object.values(expense).reduce((total, amount) => total+amount ,0);

console.log(expenseTotal);