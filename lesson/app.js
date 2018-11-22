class App{
    constructor(){
        this.controller = new Controller();
    }

    init() {
        this.controller.init();
    }
}

var app = new App();
app.init();