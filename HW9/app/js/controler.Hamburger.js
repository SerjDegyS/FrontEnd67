import { Hamburger } from "./model.Hamburger";

export class ControllerHamburger{
    constructor(model, view){
        this.model = new model(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
        this.view = new view();
        this._hamburger;
    }

    init() {
        var check = $('#size');
        console.log(check);
        
        this.view.writeResult(this.model);
    }
    
}