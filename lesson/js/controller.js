class Controller{
    constructor(model, view){
        this.model = new Module();
        this.view = new View();
    }

    init() {
        this.view.showProducts(this.model.getProducts());

        this.view.listenerBtn((id) => {
            this.model.toBasket(id, (bascket) => {
                this.view.showBasket(bascket);
            });
        });
        
        this.view.listenerRemoveBtn((id) => {
            this.model.froBasket(id);
        });
    }
}