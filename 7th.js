
                      //PART ONE
/* DESCRIPTION:
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */

function stringToArray(string){
    var result = [];
    var loopThrough = function findAndPush(string){
        for(var i=0;i<string.length;i++){
            var chr = string.charAt(i);
            if(chr === " "){
                result.push(string.slice(0,i));
                findAndPush(string.slice(i+1));
                return;
            }
        }
        result.push(string);
    };
    loopThrough(string);
    return result;    
}

stringToArray('God is good all the time') // returns ['God', 'is', 'good', 'all', 'the', 'time']



                       //PART TWO


/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */



function abbrevName(name){
    let nameArray = name.split(' ').map(elem => elem[0].toUpperCase()).reduce((init, c, i,) => init + '.'+ c);
    return nameArray;   
}
abbrevName('Twiine Enock Honeyman');  //returns T.E.H