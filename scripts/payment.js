(function(window) {
  "use strict";

  var App = window.App || {};

  function Payment(db) {
    this.db = db;
  }

  Payment.prototype.createPayment = function(payment) {
    console.log("Processing payment for " + payment.username);
    this.db.add(payment.username, payment);
  };

  Payment.prototype.printPayments = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
  };

  App.Payment = Payment;
  window.App = App;
})(window);
