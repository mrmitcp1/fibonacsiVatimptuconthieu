let sum = 0
function fibonaci(n:number):number {
    if (n<=1){
        return n
    }
     return fibonaci(n-1) + fibonaci(n - 2)
}

for (let i = 0; i < 10; i++) {
    sum+=fibonaci(i)
}
console.log(sum)

