(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function PopUp(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  PopUp.prototype.addInfo = function(paymentInfo) {
    var msg = new Popup(paymentInfo);
    this.$element.append(msg.$element);
  };

  function Popup(paymentInfo) {
    var $div = $("<div></div>", {
      id: "payWindow",
      class: "modal"
    });

    var $p = $("<p></p>");
    var $a = $("<a></a>", {
      href: "#",
      rel: "modal:close"
    });
    var close = "Close";

    var pay_details = "Thank you for your payment, " + paymentInfo.title + " " + paymentInfo.username;

    $p.append(pay_details);
    $a.append(close);
    $div.append($p);
    $div.append($a);

    this.$element = $div;
  }

  App.PopUp = PopUp;
  window.App = App;
})(window);
