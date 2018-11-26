
export class ViewHamburger{
    constructor(){
        this.S= {

            radioBoxesSize: $(".usrfrom__radiobox-size"),
            radioBoxesStuffing: $(".usrfrom__radiobox-stuffing"),
            checkBoxesTopping: $(".usrfrom__checkbox-topping"),

        }
        console.log('start view');
        
    };



    writeResult(model){
        var rez = `Price: ${model.calculatePrice()} &#8366; Caloris: ${model.calculateCalories()} `;
        $("#outputText").html(rez);
    }

    listener(eventName, cb){
        

        switch (eventName) {
            case 'greateBurger': 
                var size;
                var stuffing;
                this.S.radioBoxesSize.change(function (){
                    var radioBoxes = $(this).find("[name=size]");
                    radioBoxes.forEach = Array.prototype.forEach;
                    radioBoxes.forEach(elem => {
                        if($(elem).is(':checked')){
                            size = elem.value;
                        }
                    });
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
