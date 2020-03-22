module.exports = function toReadable(number) {
    const firstRank = {
        "0": "",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine"
    };
    const secondRank = {
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety",
        "0": ""
    };
    if (number === 0) {
        return "zero";
    }

    let readableNumber = "";
    let hundreds = (number / 100) >> 0;
    let tens = number % 100;
    tens = tens > 9 ? tens : 0;
    let ones = number % 10;

    if (number <= 9) {
        readableNumber += `${firstRank[ones]}`;
    }
    if (number >= 10 && number <= 19) {
        readableNumber += `${secondRank[tens]}`;
    }
    if (number >= 20 && number <= 99) {
        readableNumber += `${secondRank[((tens / 10) >> 0) * 10]}`;
        if (ones != 0) {
            readableNumber += ` ${firstRank[ones]}`;
        }
    }
    if (number >= 100) {
        readableNumber += `${firstRank[hundreds]} hundred`;
        if (tens >= 10 && tens <= 19) {
            readableNumber += ` ${secondRank[tens]}`;
        } else if (tens !== 0) {
            readableNumber += ` ${secondRank[((tens / 10) >> 0) * 10]}`;
            if (ones != 0) {
                readableNumber += ` ${firstRank[ones]}`;
            }
        } else {
            if (ones != 0) {
                readableNumber += ` ${firstRank[ones]}`;
            }
        }
    }
    return readableNumber;
};
