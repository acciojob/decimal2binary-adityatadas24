function decimalToBinary(decimalNum) {
    if (decimalNum === 0) {
        return "0";
    }

    let binaryNum = "";
    while (decimalNum > 0) {
        const remainder = decimalNum % 2;
        binaryNum = remainder + binaryNum;
        decimalNum = Math.floor(decimalNum / 2);
    }

    return binaryNum;
}

// Input
const decimalInput = parseInt(prompt("Enter a decimal number:"));

// Convert and Output
const binaryOutput = decimalToBinary(decimalInput);
console.log(`The binary equivalent of ${decimalInput} is: ${binaryOutput}`);

  


window.decimalToBinary = decimalToBinary;
