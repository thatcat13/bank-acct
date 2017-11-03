//business logic

function BankAccount(newName, newBal) {
  this.name = newName;
  this.balance = newBal;
}

BankAccount.prototype.addMoney = function(depositAmt) {
  this.balance += depositAmt;
}

BankAccount.prototype.removeMoney = function(withdrAmt) {
  this.balance -= withdrAmt;
}


//frontend logic
$(document).ready(function(){
  var newAcct;
  console.log(newAcct);
  $("#regName").submit(function(event){
    console.log('register submit');
    event.preventDefault();

    var newName = $("input#name").val();
    var newBal = parseInt($("input#newBal").val());

    newAcct = new BankAccount(newName, newBal);
    console.log(newAcct);
    $("#current").text(newBal);
  });//event for register

  $("form#depWithdr").submit(function(event){
    event.preventDefault();

    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());

    if (parseInt($("input#deposit").val()) > 0) {
      newAcct.addMoney(deposit);
    } else if (parseInt($("input#deposit").val()) > 0) {
      newAcct.removeMoney(withdrawal);
    }
  });//event for depWithdr




}); //ready
