module.exports = function toReadable(number) {

    const firstArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const secondArr = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const firstDigit = number % 10;
    const secondDigit = Math.floor(number / 10 % 10);
    const thirdDigit = Math.floor(number / 100);

    const verifNumber = number % 100;

    if (number >= 20 && number < 100) {
        if (firstDigit) {
            return `${secondArr[secondDigit]} ${firstArr[firstDigit]}`;
        } else {
            return `${secondArr[secondDigit]}`;
        }
    } else if (number >= 100 && (verifNumber >= 20 || verifNumber === 0)) {
        if (!secondDigit && !firstDigit) {
            return `${firstArr[thirdDigit]} hundred`;
        } else if (secondDigit && !firstDigit){
            return `${firstArr[thirdDigit]} hundred ${secondArr[secondDigit]}`;
        } else {
            return `${firstArr[thirdDigit]} hundred ${secondArr[secondDigit]} ${firstArr[firstDigit]}`;
        }
    } else if (number >= 100 && verifNumber < 20) {
        return `${firstArr[thirdDigit]} hundred ${firstArr[verifNumber]}`;
    }
    return firstArr[number];
};