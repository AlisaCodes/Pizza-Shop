function Pizza(inches, toppings, quantity) {
  this.inches = inches;
  this.toppings = toppings;
  this.quantity = quantity;
}


Pizza.prototype.pizzaPrice = function() {
  var pizzaPrice = 0

  pizzaPrice = this.quantity * (this.inches + this.toppings * 2);

  return pizzaPrice;
}

function clear() {
  $("select#pizza-size").val("");
  $("input#quantity").val("");
}

$(document).ready(function(){
  $("form#pizza-time").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#pizza-size option:selected").val();
    var inputtedQuantity = $("input#quantity").val();


var numberToppings = $("input[name=topping]:checked").map(
  function () {return this.value;}).get();

  var totalToppings = 0;

  numberToppings.forEach(function(value) {
    totalToppings += parseInt(value);
  });

  totalToppings


  var newPizza = new Pizza;
  newPizza.inches = parseInt(inputtedSize);
  newPizza.toppings = totalToppings;
  newPizza.quantity = parseInt(inputtedQuantity);

  var pizzaPrice = newPizza.pizzaPrice();

  $("#pizza-cost").text(pizzaPrice + "  " + "DOLLAS!")
  })
  })
