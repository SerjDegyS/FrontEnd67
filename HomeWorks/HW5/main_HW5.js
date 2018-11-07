var characters = [
    {name: 'Barney', 'age': 36},
    {name: 'Fred', 'age': 40},
    {'name': 'Bob', 'age': 30},
    {'name': 'Archy', 'age': 25}
];

function pluck(array, char){
    var rezArray = new Array();
    
for (var i = 0; i < array.length; i++) {
    rezArray.push(array[i][char])
}
    return rezArray;
}


document.write(pluck(characters, "age"));
console.log(pluck(characters, 'name'));

