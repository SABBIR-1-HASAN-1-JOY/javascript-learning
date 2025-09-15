function sayMyname(){
    console.log("S");
    console.log("A");
    console.log("B");
    console.log("B");
    console.log("I");
    console.log("R");
    
}

// sayMyname <= this is reference of the function
// sayMyname(); <= this is function calling
//sayMyname()

function addTwoNumbers(number1,number2){
    console.log(number1,number2)
}

// addTwoNumbers(3,4)//7
// addTwoNumbers(3,'4')//7
// addTwoNumbers(3,"a")//3a
// addTwoNumbers(3,null)//3

function addNreturn(number1,number2){
    // let result = number1+number2;
    // return result;
    return number1+number2;
}

function userLogin(userName='sam'){//a default value can be passed in 
    // if(userName === undefined){
    //     console.log("Please enter a username")
    //     return 
    // }
    if(!userName){
        console.log("Please enter a username")
        return 
    }
    return `${userName} just logged in`
}
// null or empty strings or undefined are assumed to be false

console.log(userLogin());