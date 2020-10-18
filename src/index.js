module.exports = function toReadable(number) {
    let humanReadableNumber = ''
    let numberAsString = '' + number;
    let number2
    let units = parseFloat(numberAsString.charAt(numberAsString.length - 1));
    let dozens = parseFloat(numberAsString.charAt(numberAsString.length - 2));
    let hundreds = parseFloat(numberAsString.charAt(numberAsString.length - 3));
    let languageInt = {
        units: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'],
        dozens: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    };
    if (number === 0) return 'zero';
    if (hundreds) {
        humanReadableNumber = '' + languageInt.units[hundreds] + ' hundred';
        number2 = number - hundreds*100;
        if (number2) {
            humanReadableNumber += ' ';
        } else return humanReadableNumber;
    } else {
        number2 = number;
    };
    if (number2 < 14) {
        humanReadableNumber += languageInt.units[number2]
    } else if (number2 === 18) {
        humanReadableNumber += 'eighteen'
    }else if (number2 === 15) {
        humanReadableNumber += 'fifteen'
    } else if (number2 < 20) {
        humanReadableNumber += languageInt.units[units] + 'teen'
    } else if (units) {
        humanReadableNumber += (languageInt.dozens[dozens-2]||'') + ' ' + languageInt.units[units]
    } else {
        humanReadableNumber += (languageInt.dozens[dozens-2]||'')
    }
    
    return (humanReadableNumber);

}
