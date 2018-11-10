;
(function () {
    var elements = document.querySelector("#box"),
        inputSize = document.querySelector('#size-circle')
    

    elements.style.border = "5px solid red";
    console.log(elements.style.width);


    elements.addEventListener('click', function (e) {
        elementStyle = window.getComputedStyle(elements);

        if (inputSize.value > elementStyle.width.slice(0, -2)) {
            alert("Size of circle more then size of box!");
            return;
        }
        if (e.target.id != 'box') return;

        var circleClassName = 'circle',
            circle = document.createElement('circle'),
            x = e.clientX,
            y = e.clientY;    
        circle.className = circleClassName;

        circle.style.width = inputSize.value + 'px';
        circle.style.height = inputSize.value + 'px';
        
        circle.style.left = x - 13 - (inputSize.value/2) + 'px';
        circle.style.top = y - 13 - (inputSize.value/2) + 'px';
        
        e.target.appendChild(circle);

    })





}());
