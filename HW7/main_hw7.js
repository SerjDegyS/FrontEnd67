/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/
function Hamburger(size, stuffing) { 
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
    this._throws = "Отменя!";
 } 

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {name: 'sizeSmall', price: 50, cal: 20};
Hamburger.SIZE_LARGE = {mame: 'sizeLarge', price: 100, cal: 40};
Hamburger.STUFFING_CHEESE = {name: 'stuffing_cheese', price: 10, cal: 20};
Hamburger.STUFFING_SALAD = {name: 'stuffing_salad', price: 20, cal: 5};
Hamburger.STUFFING_POTATO = {name: 'stuffing_potato', price: 15, cal: 10};
Hamburger.TOPPING_MAYO = {name: 'topping_mayo', price: 20, cal: 5};
Hamburger.TOPPING_SPICE = {name: 'topping_spice', price: 15, cal: 0};

/**
* Добавить добавку к гамбургеру. Можно добавить несколько
* добавок, при условии, что они разные.
* 
* @param topping     Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
Hamburger.prototype.addTopping = function (topping) {
    this._toppings.push(topping);
}

/**
 * Убрать добавку, при условии, что она ранее была 
 * добавлена.
 * 
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) {
    if(this._toppings.includes(topping)){
        this._toppings.splice(this._toppings.indexOf(topping), 1);
    }
    return;
}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
    return this._toppings;
}

// var ham = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// ham.addTopping(Hamburger.TOPPING_MAYO);
// ham.addTopping(Hamburger.TOPPING_SPICE);
// console.log(ham.getToppings());

// // ham.removeTopping(Hamburger.TOPPING_MAYO);
// // ham.removeTopping(Hamburger.TOPPING_SPICE);
// console.log(ham.getToppings());

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    return this._size;
}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this._stuffing;
}

/**
 * Посчитать суму значений по свойству
 * C помощю рекурсии берет со всех вложенных обьектов значения указаного свойства и сумирует их
 * @return {Number} Сума значений указаного свойства
 */
Hamburger.prototype.calcProp = function(prop){
    var rez = 0;
    function calcPropInObj(obj, prop){
        for (const key in obj) {
            if(typeof obj[key] === 'object'){ 
                calcPropInObj(obj[key], prop);
            }else{  
                if (key === prop && obj[prop] !== undefined) {
                    // console.log(obj[prop]);
                    return rez += obj[prop];
                }
            }
        }
        return rez;
    }
    return calcPropInObj(this, prop);
}

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    return this.calcProp('price');
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
    return this.calcProp('cal');
}


// var ham = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// ham.addTopping(Hamburger.TOPPING_MAYO);
// ham.addTopping(Hamburger.TOPPING_SPICE);
// ham.removeTopping(Hamburger.TOPPING_SPICE);
// console.log(ham.calculatePrice());
// console.log(ham.calculateCalories());


// /**
//  * Представляет информацию об ошибке в ходе работы с гамбургером. 
//  * Подробности хранятся в свойстве message.
//  * @constructor 
//  */
// function HamburgerException (...) { ... }


// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1