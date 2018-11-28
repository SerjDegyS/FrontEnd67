import { Hamburger, HamburgerEcxeption } from "./Hamburger";


export class ModelHamburger{
    constructor(){
        this._hamburger;
        this._size;
        this._stuffing;
        this._toppings;

        console.log('start model');

    };

    greatHamburger(size, stuffing){
        switch (size) {
            case "small":
                this._size = Hamburger.SIZE_SMALL;
                break;
            default:
                this._size = Hamburger.SIZE_LARGE;
                break;
        }

        switch(stuffing){
            case "salad":
                this._stuffing = Hamburger.STUFFING_SALAD;
                break;
            case "potato":
                this._stuffing = Hamburger.STUFFING_POTATO;
                break;
            default:
                this._stuffing = Hamburger.STUFFING_CHEESE;
                break;
        }
        
        this._hamburger = new Hamburger(this._size, this._stuffing);
        this.chooseToppings(this._toppings);
    }

    chooseToppings(toppings){
        this._toppings = toppings;
        try {
            if(this._toppings.includes("mayo")){
                this._hamburger.addTopping(Hamburger.TOPPING_MAYO);
            }else this._hamburger.removeTopping(Hamburger.TOPPING_MAYO);
        } catch (error) {
            if (error.name === 'HamburgerException') {
                console.log("OK");
            }
        }
         
        try {
            if(this._toppings.includes("spice")){
                this._hamburger.addTopping(Hamburger.TOPPING_SPICE);
            }else this._hamburger.removeTopping(Hamburger.TOPPING_SPICE);
        }catch (err) {
            
        }           
    }

    getHamburger(){
        console.log(this._hamburger);
        
        return this._hamburger;
    }
}