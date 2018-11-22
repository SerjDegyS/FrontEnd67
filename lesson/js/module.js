class Module{
    constructor(){

        this._products = [{
            id: 1,
            name: 'iPhone XS Max',
            price: 37174
        }, {
            id: 2,
            name: 'Samsung Galaxy Note 9',
            price: 21103
        }, {
            id: 3,
            name: 'Xiaomi Redmi Note 5',
            price: 4193
        }, {
            id: 4,
            name: 'Samsung Galaxy S8',
            price: 12718
        }, {
            id: 5,
            name: 'OnePlus 6',
            price: 15093
        }, {
            id: 6,
            name: 'Xiaomi Mi 8',
            price: 10761
        }];

        this._order = [];
    };


    getProducts(){
        console.log(this._products);
        return this._products;
    }

    toBasket(id, renderer){
        // var self = this;
        var product = this._products.find(x => x.id === id);
        // var index = this._products.findIndex(x => x.id === id);
        // this._products.splice(index, 1);
        
        console.log(id);
        
        this._order.push(product);
        renderer(this._order);
    }

    froBasket(id){
        this._order.forEach((elem, index) => {
            if (elem.id === id) {
                this._order.splice(index, 1);
            }

        })
        // var product = this._order.find(x => x.id === id);
        // this._products
        // render(this._order);
    }

}