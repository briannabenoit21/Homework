let pizzaToppings = ["pineapple", "chicken", "pepperchini", "green peppers"];



function greetCustomer() {
    
    for (let i = 0; i < pizzaToppings.length; i++) {
        console.log("Welcome to Brias Pizzeria, We offer the follwoing toppings" + pizzaToppings[i]);
    }


// Call the function to see the greeting and toppings
greetCustomer();

