let a = [1,3,4,5,10,30]

function isOdd(n) {
    return n % 2 == 1
}

odd_nums = a.filter(isOdd)
console.log(odd_nums)