//Find if a number is a perfect square

var isSquare = function(n){
    let ans = false;
    for (let i = 0; i <= n / 2; i++) {
        if (i*i === n) {
            ans = true;
        }
    }
    return ans;
}