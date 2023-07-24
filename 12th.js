/* You are given a string of n lines, each substring being n characters long. For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
A v-vertical scaling of a string consists of replicating v times each part of the squared string.

Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
Printed:

abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp
Task:
Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "". */


function scale(strng, k, n) {
    let multiplier = strng.substring(0, str.indexOf("\n"));
    let bg = multiplier.length;

    let arr = strng.split("\n").join("").split('').map((e, i) => addAdd(e,k)).join('').split('');

    let arr2 = arr.reduce((acc, c, i)=> {
        if(i == (bg * k) - 1 || i == (bg * (2 * k)) - 1 || i == (bg * (3 * k)) - 1 ){
            return acc + c + ' ';
        } else{
            return acc + c;
        }
    }, "" ).split(' ').map((e,i) => addAdd2(e,n)).join('');
    let arr3 = arr2.substrnging(0, arr2.length -1);
    function addAdd (j,n) {
        let ans = "";
        for(let i = 0; i < n; i++) {
            ans += j; 
        }
        return ans;
    }
    
    function addAdd2 (j,n) {
        let ans = "";
        for(let i = 0; i < n; i++) {
            ans += j + "\n"; 
        }
        return ans;
    }

    return arr3;
    // your code
}








