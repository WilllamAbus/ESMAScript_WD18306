document.addEventListener("DOMContentLoaded", function() {
    // Function to multiply two numbers
    let multiply = (num1, num2) => {
        return num1 * num2;
    }
      // Get the HTML element to display the result
    let resMulti = document.getElementById('result1Paragraph');
      // Display the result in the HTML element
    resMulti.textContent = `Multiply: ${multiply(4, 7)}`;

    // Function to convert Fahrenheit to Celsius
    let toCelius = (fahrenheit) => {
        return (5 / 9) * (fahrenheit - 32);
    }
    // Get the HTML element to display the result
    let resCelius =  document.getElementById('result2Paragraph');
     // Display the result in the HTML element
    resCelius.textContent = `Celius: ${toCelius(68)}`


    let padZeros = (num, totalLen)=> {
        let numStr = num.toString();
        let numZeros = totalLen - numStr.length;
        for (let i = 0; i <= numZeros; i++) {
            numStr = '0' + numStr;
        }
        return numStr;
    }

    // Get the HTML element to display the result
let resPadZeros = document.getElementById('result3Paragraph');
// Use the padZeros function and display the result
resPadZeros.textContent = `PadZeros: ${padZeros(1, 5)}`;

// Function to calculate the power of a base raised to an exponent
let power = (base, exponent) => {
    // Initialize the result to 1
    let result = 1;
    // Calculate the power by multiplying the base by itself exponent times
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    // Return the result
    return result;
}

// Get the HTML element to display the result
let resPower = document.getElementById('result4Paragraph');
// Use the power function and display the result
resPower.textContent = `Power: ${power(2, 3)}`;

// Function to greet someone
let greet = (who) => {
    // Log a greeting message to the console
    console.log("Hello " + who);
    let greetingParagraph = document.getElementById('result5Paragraph');
            greetingParagraph.textContent = "Hello " + who;
}

greet('World');



});