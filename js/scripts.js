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

function resetFields() {
  $("input#name").val("");
  $("input#newBal").val("");
  $("input#deposit").val("");
  $("input#withdrawal").val("");
}


//frontend logic
$(document).ready(function(){
  var newAcct;
  $("#regName").submit(function(event){
    event.preventDefault();

    var newName = $("input#name").val();
    var newBal = parseInt($("input#newBal").val());

    newAcct = new BankAccount(newName, newBal);
    console.log(newName);
    $("#nameDisplay").text(newName + "'s ");
    $("#adjustedBal").text("$" + newBal);

    resetFields();
  });//event for register

  $("form#depWithdr").submit(function(event){
    event.preventDefault();

    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());

    if (parseInt($("input#deposit").val()) > 0) {
      newAcct.addMoney(deposit);
    } else if (parseInt($("input#withdrawal").val()) > 0) {
      newAcct.removeMoney(withdrawal);
    }

  $("#adjustedBal").text("$" + newAcct.balance);

  resetFields();
  });//event for depWithdr
}); //ready
