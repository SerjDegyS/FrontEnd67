import { ModelHamburger } from "./model.Hamburger";
import { Hamburger } from "./Hamburger";
import { ViewHamburger } from "./view.Hamburger";



export class ControllerHamburger{
    constructor(model, view){
        this.model = new model();
        this.view = new view();
        this.defaultStuffing = "cheese";

        console.log('start controller');

    }

    init() {
        this.view.listener("greateBurger", (size, stuffing) => {
            console.log(size + '  ' + stuffing);
            
            if(!stuffing){
                stuffing = this.defaultStuffing;                
            }
            this.model.greatHamburger(size, stuffing);
            this.view.writeResult(this.model.getHamburger());

        })
        
        this.view.listener("chooseTopping", (toppings) => {
            this.model.chooseToppings(toppings);
            this.view.writeResult(this.model.getHamburger());
        })

        
        // console.log(this.model.getHamburger());
        
    }
}