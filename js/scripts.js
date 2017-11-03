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
  $("form#register").submit(function(event){
    event.preventDefault();

    var newName = $("#regName").val();
    var newBal = parseInt($("#newBal").val());

    var newAcct = new BankAccount(newName, newBal);
    debugger
  });//event for register

  $("#current").text(newBal);

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


    $("#current").text(newAcct.balance);

}); //ready
