import { Hamburger } from "./Hamburger";


export class ModelHamburger{
    constructor(){
        this._hamburger;
        this._size;
        this._stuffing;

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
    }

    chooseToppings(toppings){
        try {
            if(toppings.includes("mayo")){
                this._hamburger.addTopping(Hamburger.TOPPING_MAYO);
            }else this._hamburger.removeTopping(Hamburger.TOPPING_MAYO);
        } catch (error) {
            
        }
         
        try {
            if(toppings.includes("spice")){
                this._hamburger.addTopping(Hamburger.TOPPING_SPICE);
            }else this._hamburger.removeTopping(Hamburger.TOPPING_SPICE);
        }catch (err) {
            
        }           
    }

    getHamburger(){
        return this._hamburger;
    }
}