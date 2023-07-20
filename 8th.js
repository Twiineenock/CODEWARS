                 //PART ONE

/* Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given. */

function booleanToString(b){
    return `${b}`;
}
booleanToString(1 === 1); //returns 'true'

                   // PART TWO


/* An AI has infected a text with a character!!

This text is now fully mutated to this character.
                             
If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!
                             
Note: The character is a string of length 1 or an empty string.
                             
Example
text before = "abc"
character   = "z"
text after  = "zzz" */

function contamination(text, char){
    return (text || char === "") ? "" : text.split('').map((elem) => char).join('')  
}

contamination("_3ebzgh4","&")   // returns "&&&&&&&&"











