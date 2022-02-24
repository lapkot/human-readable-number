function toReadable (number) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20) {
        return arr[number];
    }
    if (number >= 20 && number < 100) {
        const rest = number % 10;
        return `${arr2[Math.floor((number / 10) - 2)]}${rest !== 0 ? ` ${arr[rest]}` : ''}`;
    }
    if (number >= 100) {
        const rest100 = number % 100;
        const rest10 = number % 10;
        const dif = Math.floor((rest100 - rest10) / 10);
        let res = `${arr[Math.floor(number / 100)]} hundred`
        if (rest100 < 20 && rest100 > 0) {
            res += ` ${arr[rest100]}`;
            return res;
        }
        if (dif !== 0) {
            res += ` ${arr2[dif - 2]}`;
        }
        if (rest10 !== 0) {
            res += ` ${arr[rest10]}`;
        }
        return res;
    }
}

module.exports = toReadable;

console.log(toReadable(245))