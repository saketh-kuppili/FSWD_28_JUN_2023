
function more_than_2_digits(s)
{
     let count = 0
     for(let c of s)
     {
        if (c >= '0' && c <= '9') {
           count ++;
           if (count > 2)
             return true;
        }
     }

     return false;
}

console.log(more_than_2_digits('abc'))
console.log(more_than_2_digits('abc12xy34'))
