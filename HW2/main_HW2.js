
var colors = [
    {
        name: 'black',
        image: 'https://asset1.ee.co.uk/medias/000000000300015107-detail-3-9f87d67d-8011-452a-a9cb-56a95674db0a0-Format-960?context=bWFzdGVyfHJvb3R8MzUxMzB8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL3Jvb3QvaDMwL2hjNi85MDcwOTk4MDYxMDg2LzAwMDAwMDAwMDMwMDAxNTEwNy1kZXRhaWwtMy05Zjg3ZDY3ZC04MDExLTQ1MmEtYTljYi01NmE5NTY3NGRiMGEwX0Zvcm1hdC05NjB8ZmYyODkzOWYwMmQ5ZmNjNTk4OTdhZDkwNWNhZGU5YTVmZDRhZmQ5OTU4OWJlMjkzNGViNjk3ZDQwYjQxYmQ0Mg'},  
    {
        name: 'silver',
        image: 'silver.png'},  
    {
        name: 'red',
        image: 'red-iphone.png'},  
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
var price = 0;

colors: while(true){
    color = prompt('Color ?');
    if(color === null){
        alert("Good bye!")
        break;
    }

    for(var i = 0; i < colors.length; i++){
        if(color === colors[i].name){
            img = colors[i].image;
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
            price = memories[i].price;
            break memories;
        }
    }
}

document.write('<img width="150" src="'+ img +'">');
document.write('<h2>Price: ' + price + '$</h2>');
document.write('<h3>Memory: ' + memory + 'GB</h3>');