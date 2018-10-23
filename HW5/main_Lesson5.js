// Task_1
var arr = new Array(1, 2, 3, 4, 5);
var arr1 = 0;
var func = function(elem){
    return ++elem;
}

function map(fn, arr){
    if(typeof fn !== "function"){
        console.log("Not function!");
    }
    if(arr.length === undefined){
        console.log("Not array!");
    }
    
    var rezArray = new Array();
    for(var i = 0; i < arr.length; i++){
        rezArray.push(fn(arr[i]));
    }
    return rezArray;
}

document.write(map(arr, arr1));



// Task_2
var sequence = function (start, step) {
    if (start === undefined) {
        start = 0;
    }
    if (step === undefined) {
        step = 1;
    }
    start -= step;
    return function () {
        return start += step;
    }
}

function take(gen, x){
    var mas = new Array();
    for(var i = 0; i < x; i++){
        mas.push(gen());
    }
    return mas;
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5));