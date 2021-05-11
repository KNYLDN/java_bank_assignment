// bank simulator

/*
Object name: account Properties of the object:
accountName: String,
balance: Number (initiate this to 100 from start),
getBalance: function,
deposit: function,
withdrawal: function,
getAccountName: function,
Extra accountError: function,
Extra exitAccount: function

The main function should be called atm() and that is not a 
function that is a property of the object. This function 
holds the actual menu, the switch or if/else. I've provided 
some starter code inside of that function but you need 
to modify it also run the function.

Objektet ska hanetar all logik

Funktionen atm() den ska egentligen bara sköta menyn, att visa en meny

*/

const account = {
  accountName: "Diamonds",
  balance: 100,
  getAccountName: function () {
    alert("Account name: " + this.accountName);
    atm();
  },
  getBalance: function () {
    alert("Your balance is: " + this.balance);
    atm();
  },
  deposit: function () {
    let dep = parseFloat(prompt("How much would you like to deposit?"));
    // hantera error för att man inte kunna sätta in 0, något som inte är nummer och inte minusvärden
    if (isNaN(dep) || dep <= 0) {
      alert("Error: Please enter a valid number");
      this.deposit();
      // lägg till att kolla så att dep inte är lika med 0 eller mindre
      // om det nu är så att det blir fel så visa ett meddelande om att blev error eller nåt
      // kalla på deposit igen för att ge användaren en ny chans
    } else {
      this.balance += dep;
      // this.balance = this.balance + dep; <-- så kan man också skriva
      // den nya balansen ska vara lika med den gamla balansen + den nya insatta värdet
      this.getBalance();

    }
  },
  // hantera på samma sätt som deposit men ändra till minus istället för +
  withdrawal: function () {
    let dep = parseFloat(prompt("How much would you like to withdraw?"));
    if (isNaN(dep) || dep <= 0) {
      alert("Error: Please enter a valid number");
      this.withdrawal();
    } else {
      this.balance -= dep;
      this.getBalance();
    }
  },
  accountError: function () {
    alert("Error: Please select a valid option");
    atm();
  },
  exitAccount: function () {
    const leave = confirm("Are you sure?");
    if (leave) {
      return;
    }
  },
};

function atm() {
  let choice = parseInt(prompt("Fetch Account name: 1. Get balance: 2. Deposit: 3. Withdrawal: 4. Exit: 5."));
  //prompt user for choice.

  if (choice === 1) {
    // visa namnet
    account.getAccountName();
    //console.log("Choice nr 1");
  } else if (choice === 2) {
    account.getBalance();
  } else if (choice === 3) {
    account.deposit();
  } else if (choice === 4) {
    account.withdrawal();
  } else if (choice === 5) {
    account.exitAccount();
  } else {
    account.accountError();
  }

  // Tänk på att hantera om man väljer något annat nummer som inte är ett menyval
  // hantera sist i en else
}

atm();
