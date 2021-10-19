const verifyGapsInBinaryNumber = (number) => {

    const numberToBinary = number.toString(2);
    const arrayBinary = numberToBinary.split('1');

    
    let count1 = 0;
    let count2 = 0;
    
    for (let x of numberToBinary) {
        if (x == 1) {
            count1++;
        }
        if (x == 0) {
            count2++
        }
    }

    if (count1 <= 1 || count2 == 0) {
        console.log('will be returned > ', 0);
        return 0;
    }

    if(arrayBinary[arrayBinary.length - 1] != 1) {
        arrayBinary.pop()
    }

    arrayBinary.shift();
    arrayFiltered = arrayBinary.filter(key => key.length > 0);


    arrayFiltered.sort((a, b) => b.length - a.length);

    console.log('original binary > ', numberToBinary);
    console.log('will be returned > ', arrayFiltered[0].length);

    return arrayFiltered[0].length;
}

verifyGapsInBinaryNumber(15);