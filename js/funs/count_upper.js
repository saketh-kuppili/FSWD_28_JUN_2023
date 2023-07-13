let names = ['JAVA', 'JavaScript', 'Python', 'TypeScript', 'C#']

function count_upper(s)
{
     let count = 0
     for(let c of s)
     {
        if (c >= 'A' && c <= 'Z') {
           count ++;
        }
     }
     return count
}

var upper_counts = names.map(count_upper)
console.log(upper_counts)
 

