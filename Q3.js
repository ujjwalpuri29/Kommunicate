const reverseNumber = (num) => {
    var rev = 0;
    while (num > 0) {
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return rev;
};

const reverseNumber2 = (num) => String(num).split("").reverse().join("");

console.log(reverseNumber(321));
console.log(reverseNumber2(321));