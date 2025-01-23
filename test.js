// A JavaScript script with intentional code smells

// Hardcoded values (bad practice)
var TAX_RATE = 0.2; // This should ideally come from a configuration file
var prices = [100, 200, 300]; // Should be dynamic

// Poor variable naming conventions
var x = 0; // Unclear variable name
var temp = "temporary value"; // Unnecessary variable

// Duplicate code
function calculateTotal(prices) {
    let total = 0;
    for (var i = 0; i < prices.length; i++) {
        total += prices[i] + (prices[i] * TAX_RATE); // Tax logic duplicated here
    }
    return total;
}

function calculateDiscountedTotal(prices) {
    let total = 0;
    for (var i = 0; i < prices.length; i++) {
        total += prices[i] - (prices[i] * 0.1); // Discount logic duplicated here
    }
    return total;
}

// Unused function
function unusedFunction() {
    console.log("I am never called!");
}

// Poor error handling
try {
    let result = 10 / 0; // Division by zero
} catch (error) {
    console.log("An error occurred."); // Generic error message
}

// Long, unclear function
function doStuff() {
    let totalPrice = calculateTotal(prices);
    let discountedPrice = calculateDiscountedTotal(prices);

    console.log("Total price:", totalPrice);
    console.log("Discounted price:", discountedPrice);

    // Hardcoded output
    if (totalPrice > 500) {
        console.log("Big spender!"); // Hardcoded message
    } else {
        console.log("Thanks for your purchase."); // Hardcoded message
    }
}
doStuff();

// Dead code
// function deadCode() {
//     return "I am not needed.";
// }

// Global variable pollution
globalVar = "This is a global variable."; // No 'var', 'let', or 'const'
