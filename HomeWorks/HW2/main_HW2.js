var arr = Array(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);

//Task_1
var max = arr[0];
for(var i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
document.write("Max = " + max + '<br>');

//Task_2
var min = arr[0];
for(var i = 0; i < arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
    }
}
document.write("Min = " + min + '<br>');

//Task_3
var summa = 0;
for(var i = 0; i < arr.length; i++){
    summa += arr[i];
}
document.write("Summa = " + summa + '<br>');

//Task_4
var average = summa / arr.length;

document.write("Average = " + average + '<br>');
