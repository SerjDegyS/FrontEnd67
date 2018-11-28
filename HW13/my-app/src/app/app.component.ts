import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW13';
  phones = [{
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


}
