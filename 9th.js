                  //PART ONE
                  //Hello World - Without Strings

/* DESCRIPTION:
Task
You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`
Good luck and try to be as creative as possible! */

const helloWorld = () => {
    return Object.keys({
        hello: 0,
        world: 1,
    }).join(String.fromCharCode(44,32)) + String.fromCharCode(33);
};

                         // PART TWO
                         //Hello, Name or World!

    /* DESCRIPTION:
    Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
                         
    Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
                         
    Examples:
                         
    * With `name` = "john"  => return "Hello, John!"
    * With `name` = "aliCE" => return "Hello, Alice!"
    * With `name` not given 
      or `name` = ""        => return "Hello, World!"
      */

function hello(name) {
    return (name === '' || !name) ? 'Hello, World!' : `Hello, ${name[0].toUpperCase() + name.substring(1).toLowerCase()}!`
}

