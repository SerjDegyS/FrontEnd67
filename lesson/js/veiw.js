class View{
    constructor(){
        this.S ={
            productsList: $('.products-list'),
            orderList: $(".orders-list"),
            btnPlus: '.products-item__btn',
            btnRemove: '.products-item__remove-btn',
            totalPrice: '.orders_total-price'
        }
    };

    showProducts(products) {

        var allProducts = '';
        products.forEach(element => {
            allProducts += `<li class="products-item"><button id="1" class="products-item__btn" data-id="${element.id}">+</button>     ${element.name} - ${element.price}$</li>`
        });


        // this.S.productsList.empty();
        this.S.productsList.append(allProducts);
    }

    showBasket(products) {
        var totalPrice = 0;
        var allProducts = '';
        console.log(products);
        
        products.forEach(element => {
            allProducts += `<li class="products-item"><button class="products-item__remove-btn" data-id="${element.id}">-</button>     ${element.name} - ${element.price}$</li>`
            totalPrice += element.price;
        });
        this.S.orderList.html(allProducts);
        $(this.S.totalPrice).html(`Total price: ${totalPrice}$`);

    }

    listenerBtn(toBasket) {
        this.S.productsList.on('click', this.S.btnPlus, function(e){            
                for( var i = 0; i < e.target.attributes.length; i++){
                    if(e.target.attributes[i].name === "data-id"){
                        var id = +e.target.attributes[i].value;
                    }
                }
                // $(`[data-id=${id}]`).prop('disabled', true);
                this.setAttribute('disabled', 'disabled');
                toBasket(id);
        })
    }

    listenerRemoveBtn(fromBasket){
        this.S.orderList.on('click', this.S.btnRemove, function(e){
            console.log(this);
            var atr =  e.target.attributes;
            NamedNodeMap.prototype.forEach = Array.prototype.forEach;
            console.log(atr);
            
            e.target.attributes.forEach((elem) => {
                if(elem.name === 'data-id'){
                    var id = +elem.value;
                    fromBasket(id);
                    console.log(e);
                    
                    
                    this.parentNode.remove();
                }
                console.log($(".orders-list").children().length === 0)
                if($(".orders-list").children().length === 0){
                    $(".orders").remove('orders_total-price');
                }
            });
            
            
            
            
        })
    }

}