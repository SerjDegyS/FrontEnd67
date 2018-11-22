
// import { Hamburger } from './model.Hamburger';
import { ControllerHamburger } from './controler.Hamburger';
import { ViewHamburger } from './view.Hamburger';
import { Hamburger } from './model.Hamburger';


class App{
    constructor(){
        this.controllerHamburger = new ControllerHamburger(
            Hamburger,
            ViewHamburger);
        console.log("Start");
    }

    init() {
        this.controllerHamburger.init();
    }
}

var app = new App();
app.init();