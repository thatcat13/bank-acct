//business logic

function BankAccount(newName, newBal = 0) {
  this.name = newName;
  this.balance = newBal;
}

BankAccount.prototype.setName = function(name) {
  this.name = name;
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
    console.log(newAcct);
      if (newAcct) {
        newAcct.setName(newName);
      } else {
        newAcct = new BankAccount(newName, newBal);
        $("#adjustedBal").text("$" + newBal);
      };

    $("input#deposit").prop("disabled", false);
    $("input#withdrawal").prop("disabled", false);
    $("input#newBal").prop("disabled", true);

    $("#nameDisplay").text(newName + "'s ");


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
