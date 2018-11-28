
export class ViewHamburger{
    constructor(){
        this.S= {

            radioBoxesSize: $(".usrfrom__radiobox-size"),
            radioBoxesStuffing: $(".usrfrom__radiobox-stuffing"),
            checkBoxesTopping: $(".usrfrom__checkbox-topping"),
            burgerShow: $('#burgerShow'),

        }
        console.log('start view');
        
    };

    showBurger(burger){
        // show size
        var size;
        switch (burger.size.name) {
            case 'sizeSmall':
                size = '25%';
                break;
            case 'sizeLarge':
                size = '40%'
            break;
        }
        

        // show stuffing
        switch(burger.stuffing.name) {
            case 'stuffing_cheese':
                this.S.burgerShow.children().css('display', 'none');
                this.S.burgerShow.children('#cheese').css({'display':'block', 'width': `${size}`});
                break;
            case 'stuffing_salad':
                this.S.burgerShow.children().css('display', 'none');
                this.S.burgerShow.children('#salad').css({'display':'block', 'width': `${size}`});
                break;
            case 'stuffing_potato':
                this.S.burgerShow.children().css('display', 'none');
                this.S.burgerShow.children('#potato').css({'display':'block', 'width': `${size}`});
                break;
        }

        // show toppings
        this.S.burgerShow.children('.topping').css('display', 'none');
        burger.toppings.forEach(top => {
            switch(top.name){
                case 'topping_mayo':
                    this.S.burgerShow.children('#mayo').css('display','block');
                    break;
                case 'topping_spice':
                    this.S.burgerShow.children('#spice').css('display','block');
                    break;
            }
        })
    }

    writeResult(model){
        this.showBurger(model);
        var rez = `Price: ${model.calculatePrice()} &#8366; Caloris: ${model.calculateCalories()} `;
        $("#outputText").html(rez);
    }

    listener(eventName, cb){
        
        var size;
        var stuffing;

        switch (eventName) {
            case 'greateBurger': 
                
                this.S.radioBoxesSize.change(function (){
                    var radioBoxes = $(this).find("[name=size]");
                    radioBoxes.forEach = Array.prototype.forEach;
                    radioBoxes.forEach(elem => {
                        if($(elem).is(':checked')){
                            size = elem.value;
                        }
                    });
        
                    $('#topping .radioInput').removeAttr('disabled');
                
                    cb(size, stuffing);
                });
                
                this.S.radioBoxesStuffing.change(function (){
                    var radioBoxes = $(this).find("[name=stuffing]");
                    radioBoxes.forEach = Array.prototype.forEach;
                    radioBoxes.forEach(elem => {
                        if($(elem).is(':checked')){
                            stuffing = elem.value;
                        }
                    });
                    cb(size, stuffing);
                })
                break;
                
            case 'chooseTopping':
                this.S.checkBoxesTopping.change(function (){
                    var toppings = [];
                    var radioBoxes = $(this).find(".radioInput");
                    radioBoxes.forEach = Array.prototype.forEach;
                    radioBoxes.forEach(elem => {
                        if($(elem).is(':checked')){
                            toppings.push(elem.value);
                        }
                    })                    
                    cb(toppings);
                })
                break;
        }
    }
}
