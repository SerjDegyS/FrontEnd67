;
(function () {
    var elements = document.querySelector("#box"),
        inputSize = document.querySelector('#size-circle')
    console.dir(inputSize);


    elements.style.border = "5px solid red";
    console.log(document.body.style.margin);


    elements.addEventListener('click', function (e) {
        
        if (e.target.id != 'box') return;

        var circleClassName = 'circle',
            circle = document.createElement('circle'),
            x = e.clientX,
            y = e.clientY;    
        circle.className = circleClassName;
        console.log(inputSize.value) ;
        circle.style.width = inputSize.value + 'px';
        circle.style.height = inputSize.value + 'px';
        

        
        circle.style.left = x - 13 - (inputSize.value/2) + 'px';
        circle.style.top = y - 13 - (inputSize.value/2) + 'px';
        // document.body.style.margin = '0px';
        console.log(document.body.style.margin);
        
        e.target.appendChild(circle);

    })





}());
