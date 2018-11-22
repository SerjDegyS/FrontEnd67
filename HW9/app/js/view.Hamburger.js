
export class ViewHamburger{
    constructor(){
        // this.modelHamburger = modelHamburger;
        console.log('start view');
        
    };



    writeResult(model){
        var res = `Price: ${model.calculatePrice()} &#8366; Caloris: ${model.calculateCalories()} `;
        document.getElementById("outputText").innerHTML = res;
    }
}
// var viewHamburger = new ViewHamburger(hamburger);
// viewHamburger.writeResult();