//Task_1
var arr = [3, 5, 7, 10, 50, 56, 80, 89, 37];
var arr2 = [30, 51, 74, 106, 540, 356, 280, 859, 372];
 
var mySlice = function (array, start, amount){
    if(array.length === undefined){
        console.log("Not array!");
        return;
    }else if(start <= 0 || start > array.length){
        console.log("Wrong start!");
        return;
    }else if(start - 1 + amount > array.length){
        console.log("Not full part of array!");   
    }
    return array.slice(start - 1, start - 1 + amount);
}
console.log(mySlice(arr, 2, 5));
console.log(mySlice(arr2, 4, 6));

//Task_2
function numPrompt(){
    var input = prompt("Please enter a value...");
    switch (typeof +input){
        case 'number':
            return +input;
        case 'string':
            return NaN;
        case 'null':
            return null;
    }   
}

alert("Result: " + numPrompt());

//Task_3
function calculator(){
    
    var enterNumber = function(discr){

        function isNomeric(value){
            return !isNaN(parseFloat(value)) && isFinite(value);
        }
        
        
        do{
           var number = prompt("Enter " + discr + " number...");

            if(number === null){
                alert("Goodbye!");
                break;
            }
        }while(!isNomeric(number));
        console.log(typeof number);
        return +number;
    }

    var number1 = enterNumber("first");
    var number2 = enterNumber("second");
    var sign = prompt("Enter the sign...");

    document.write(number1 + ' ' + sign + ' ' + number2 + ' = ')

    switch(sign){
        case '+': return number1 + number2;
        case '-': return number1 - number2;
        case '*': return number1 * number2;
        case '/': return number1 / number2;
    }

//    return ((number1 + '+' + number2));

}

document.write(calculator());