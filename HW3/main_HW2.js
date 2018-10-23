
var colors = [
    {
        name: 'black',
        image: 'black1.png',
        colorPrice: 50},  
    {
        name: 'silver',
        image: 'silver.png',
        colorPrice: 70},  
    {
        name: 'red',
        image: 'red-iphone.png',
        colorPrice: 100},  
    ]

var memories = [
    {
        val: 128,
        price: 500
    },
    {
        val: 256,
        price: 600
    },
    {
        val: 512,
        price: 700
    }];

var color;
var img = null;
var memory = 0;
var phonePrice = 0;

colors: while(true){
    color = prompt('Color ?');
    if(color === null){
        alert("Good bye!")
        break;
    }

    for(var i = 0; i < colors.length; i++){
        if(color === colors[i].name){
            img = colors[i].image;
            phonePrice += colors[i].colorPrice;
            break colors;
        }
    }
}

memories: while(img !== null){
    memory = prompt('Memory ?')
    if(memory === null){
        memory = 0;
        alert("Good bye!")
        break;
    }

    for(var i = 0; i < memories.length; i++){
        if(+memory === memories[i].val){
            phonePrice += memories[i].price;
            break memories;
        }
    }
}


document.write('<img width="150" src="img/' + img + '">');
document.write('<h2>Price: ' + phonePrice + '$</h2>');
document.write('<h3>Memory: ' + memory + ' GB</h3>');