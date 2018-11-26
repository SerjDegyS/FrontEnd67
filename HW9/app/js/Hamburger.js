/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/
// function Hamburger(size, stuffing) { 
//     this._size = size;
//     this._stuffing = stuffing;
//     this._toppings = [];
//     this._throws = "Отмена!";
//  } 

export class Hamburger {
     constructor(size, stuffing) {
        console.log(arguments);
        
        this._size = Hamburger.checkSize(size);
        this._stuffing = Hamburger.checkStuffing(stuffing);
        this._toppings = [];
        Hamburger.count++;
     }

/**
 * 
 * @param {size} Размер ли это? 
 */
    static checkSize (size){
        if (size === Hamburger.SIZE_LARGE || size === Hamburger.SIZE_SMALL) {
             return size;
        }else {throw new HamburgerException(` Invalid size: ${size.name}. Get default size: ${Hamburger.SIZE_SMALL.name}`);
            // return Hamburger.SIZE_SMALL;
        }
     }
/**
 * 
 * @param {stuffing} Начинка ли это? 
 */
static checkStuffing (stuffing){
    if (stuffing === Hamburger.STUFFING_CHEESE || stuffing === Hamburger.STUFFING_POTATO || stuffing === Hamburger.STUFFING_SALAD) {
         return stuffing;
    }else { throw new HamburgerException(`Invalid stuffing: ${stuffing.name}. Get default stuffing: ${Hamburger.STUFFING_SALAD.name}`);
    return Hamburger.STUFFING_SALAD;
    }
 }
/**
* Добавить добавку к гамбургеру. Можно добавить несколько
* добавок, при условии, что они разные.
* 
* @param topping     Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
    addTopping(topping) {
         if (this._toppings.includes(topping)) {
            throw new HamburgerException(`Duplicate ${topping.name}`);
         }else{
            this._toppings.push(topping);
            console.log(`Added ${topping.name}`);
         }
     }
/**
 * Убрать добавку, при условии, что она ранее была 
 * добавлена.
 * 
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
    removeTopping (topping) {
        if(this._toppings.includes(topping)){
            this._toppings.splice(this._toppings.indexOf(topping), 1);
            console.log(`Remove ${topping.name}`);
        }else{
            throw new HamburgerException(`No detected ${topping.name}! Please, first add it!`);
        }
    }
/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
    get toppings () {
        return this._toppings;
    }
/**
 * Узнать размер гамбургера
 */
    get size () {
        return this._size;
    }
/**
 * Узнать начинку гамбургера
 */
    get stuffing () {
        return this._stuffing;
    }
/**
 * Посчитать суму значений по свойству
 * C помощю рекурсии берет со всех вложенных обьектов значения указаного свойства и сумирует их
 * @return {Number} Сума значений указаного свойства
 */
    calcProp(prop){
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
    calculatePrice () {
        return this.calcProp('price');
    }
/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
    calculateCalories () {
        return this.calcProp('cal');
    }


// const
  
}

Hamburger.count = 0;
/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {name: 'sizeSmall', price: 50, cal: 20};
Hamburger.SIZE_LARGE = {mame: 'sizeLarge', price: 100, cal: 40};
Hamburger.STUFFING_CHEESE = {name: 'stuffing_cheese', price: 10, cal: 20};
Hamburger.STUFFING_SALAD = {name: 'stuffing_salad', price: 20, cal: 5};
Hamburger.STUFFING_POTATO = {name: 'stuffing_potato', price: 15, cal: 10};
Hamburger.TOPPING_MAYO = {name: 'topping_mayo', price: 20, cal: 5};
Hamburger.TOPPING_SPICE = {name: 'topping_spice', price: 15, cal: 0};


/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
class HamburgerException {
    constructor(message) {
        this.name = 'HamburgerException';
        this.message = message;
    }
}


// // маленький гамбургер с начинкой из сыра
// let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// let hamburger2 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);
// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // спросим сколько там калорий
// console.log("Calories: %f", hamburger.calculateCalories());
// // сколько стоит
// console.log("Price: %f", hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// // А сколько теперь стоит? 
// console.log("Price with sauce: %f", hamburger.calculatePrice());
// // Проверить, большой ли гамбургер? 
// console.log("Is hamburger large: %s", hamburger.size === Hamburger.SIZE_LARGE); // -> false
// // Узнать начинку
// console.log("Stuffing of hamburger: %s",hamburger.stuffing.name);
// // Убрать добавку
// // hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// // hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log(hamburger.toppings);
// //Количество добавок
// console.log("Have %d toppings", hamburger.toppings.length); // 1
// //Количество созданых гамбургеров
// console.log(`Hamburger count: ${Hamburger.count}`);
