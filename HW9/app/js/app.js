
// import { Hamburger } from './model.Hamburger';
import { ControllerHamburger } from './controler.Hamburger';
import { ViewHamburger } from './view.Hamburger';
import { ModelHamburger } from './model.Hamburger';


class App{
    constructor(){
        this.controllerHamburger = new ControllerHamburger(
            ModelHamburger,
            ViewHamburger);
        console.log("Start");
    }

    init() {
        this.controllerHamburger.init();
    }
}

var app = new App();
app.init();