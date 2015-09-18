describe("Pizza", function() {
  it("creates an object with properties", function() {
    var testPizza = new Pizza(7, 3, 3);
    expect(testPizza.inches).to.equal(7);
    expect(testPizza.quantity).to.equal(3);
    expect(testPizza.toppings).to.equal(3);
  });

  it("calculates the price of the pizza based on size, toppings and quantity", function() {
  var testPizza = new Pizza(7, 3, 2);
  expect(testPizza.inches).to.eql(7);
  expect(testPizza.quantity).to.equal(2);
  expect(testPizza.toppings).to.equal(3);
  expect(testPizza.pizzaPrice()).to.equal(26);
  });
});
