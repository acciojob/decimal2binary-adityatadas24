function decimalToBinary(num) {
  //Write you code here
	 if (decimal === 0) {
        return '0';
    }
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

  
}

window.decimalToBinary = decimalToBinary;
