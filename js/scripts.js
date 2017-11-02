//business logic

function BankAccount(name, initBal) {
  this.name = name;
  this.balance = initialBal;
}

BankAccount.prototype.addMoney = function(depositAmt) {
  this.balance += depositAmt;
}

BankAccount.prototype.removeMoney = function(withdrAmt) {
  this.balance -= withdrAmt;
}




//frontend logic

$()
