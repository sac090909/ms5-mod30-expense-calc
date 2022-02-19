// input function to set input for income and expense

function input(amount) {
  const inputField = document.getElementById(amount);
  let inputFieldTextValue = inputField.value;
  let inputFieldValue = parseFloat(inputFieldTextValue);
  return inputFieldTextValue;
}

//Reset input fileds fuction
function resetInputValue(amount) {
  const inputField = document.getElementById(amount);
  inputField.value = 0;
}

function resetInput() {
  resetInputValue("income");
  resetInputValue("food-expense");
  resetInputValue("rent-expense");
  resetInputValue("clothes-expense");
  // resetInputValue("income-percent");
}

function resetResultValue(amountResult) {
  const inputField = document.getElementById(amountResult);
  inputField.innerText = 0;
}

// function resetResult() {
//   resetResultValue("total-expense");
//   resetResultValue("balance");
//   resetResultValue("saving");
//   resetResultValue("remaining-balance");
// }

function resetResultBalance() {
  resetResultValue("total-expense");
  resetResultValue("balance");
}

function resetResultRemainingBalance() {
  resetResultValue("saving");
  resetResultValue("remaining-balance");
}

// ================================================

document.getElementById("calculate-btn").addEventListener("click", function () {
  // income and expense value set

  const income = input("income");
  const foodExpense = input("food-expense");
  const rentExpense = input("rent-expense");
  const clothesExpense = input("clothes-expense");

  if (
    isNaN(income) ||
    isNaN(foodExpense) ||
    isNaN(rentExpense) ||
    isNaN(clothesExpense) ||
    income < 0 ||
    foodExpense < 0 ||
    rentExpense < 0 ||
    clothesExpense < 0
    // income == "" ||
    // foodExpense == "" ||
    // rentExpense == "" ||
    // clothesExpense == ""
  ) {
    document.getElementById("msg-string").style.display = "block";
    resetInput();
    resetResultBalance();
  } else {
    const totalExpense =
      parseFloat(foodExpense) +
      parseFloat(rentExpense) +
      parseFloat(clothesExpense);

    const totalExpenseField = document.getElementById("total-expense");
    const totalExpenseFieldTextValue = totalExpenseField.innerText;

    totalExpenseField.innerText = totalExpense;
    const balance = parseFloat(income) - totalExpense;
    const balanceField = document.getElementById("balance");
    document.getElementById("msg-string").style.display = "none";

    if (balance < 0) {
      document.getElementById("msg-balance").style.display = "block";
      resetResultBalance();
      resetInput();
    } else {
      balanceField.innerText = balance;
      document.getElementById("msg-balance").style.display = "none";
    }
  }
});
// ======================================
document.getElementById("save-btn").addEventListener("click", function () {
  const incomePercent = input("income-percent");
  const income = input("income");

  if (
    isNaN(income) ||
    isNaN(incomePercent) ||
    income < 0 ||
    incomePercent < 0
    // income == "" ||
    // incomePercent == ""
  ) {
    document.getElementById("msg-string").style.display = "block";
    resetResultRemainingBalance();
    resetInputValue("income-percent");
  } else {
    const savingAmount = (parseFloat(incomePercent) / 100) * parseFloat(income);

    document.getElementById("saving").innerText = savingAmount;

    const balanceField = document.getElementById("balance");
    const balanceFieldTextValue = balanceField.innerText;

    if (savingAmount > balanceFieldTextValue) {
      document.getElementById("msg-saving").style.display = "block";
      resetResultRemainingBalance();
      resetInputValue("income-percent");
    } else {
      const remainingBalance =
        parseFloat(balanceFieldTextValue) - parseFloat(savingAmount);
      const remainingBalanceFiled =
        document.getElementById("remaining-balance");
      remainingBalanceFiled.innerText = remainingBalance;

      document.getElementById("msg-saving").style.display = "none";
      document.getElementById("msg-string").style.display = "none";
    }
  }
});
