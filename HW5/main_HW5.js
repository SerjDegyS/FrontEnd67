var characters = [
    {name: 'Barney', age: 36},
    {'name': 'Fred', 'age': 40},
    {'name': 'Bob', 'age': 30},
    {'name': 'Archy', 'age': 25}
];

function pluck(array, char){
    var rezArray = new Array();
    for (var i = 0; i < array.length; i++) {
        if(array[i]['name'] == char){
            rezArray.push(array[i]['name']);
        }else if(array[i]['age'] == char)
            rezArray.push(array[i]['age'])
}
    return rezArray;
}

document.write(characters.);
console.log(pluck(characters, 'name'));

