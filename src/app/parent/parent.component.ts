import {Component} from '@angular/core';

interface Fruit {
  id: number
  name: string
  price: number
}

@Component({
  selector: 'ang-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  // 1.Отрисовать массив фруктов (вывести  name price)
  // 2. Нечёт отобразить зелёным цв
  // 3.Чётн отобразить красным цв
  // 4.Отобразить продукты только стоимостью болше 7
  // 5.Продукты больше 20  - добавить любой стиль, который их выделит в списке



  fruits: Fruit[] = [
    {id: 1, name: 'apple', price: 10},
    {id: 2, name: 'orange', price: 20},
    {id: 3, name: 'watermelon', price: 30},
    {id: 4, name: 'banana', price: 5},
    {id: 5, name: 'pears', price: 12},
    {id: 6, name: 'raspberries', price: 18},
    {id: 7, name: 'avocados', price: 14},
    {id: 8, name: 'mangoes', price: 3},
    {id: 9, name: 'kiwifruit', price: 7},
  ]


}
