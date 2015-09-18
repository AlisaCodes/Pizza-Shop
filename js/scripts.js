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


function showSelectedValues()
{
  alert($("input[name=topping]:checked").map(
     function () {return this.value;}).get().join(","));
}


// var arr=[1,2,3,4];
// alert(eval(arr.join('+')));

$(document).ready(function(){
  $("form#pizza-time").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#pizza-size option:selected").val();
    var inputtedToppings = $()
    var inputtedQuantity = $("select#quantity option:selected").val()

  var newPizza = new Pizza;
  newPizza.inches = inputtedSize;
  newPizza.toppings = inputtedToppings;
  newPizza.quantity = inputtedQuantity;

  var pizzaPrice = newPizza.pizzaPrice();

  showSelectedValues()

  $(".final-pizza").append(
    pizzaPrice
  )
  })
})
