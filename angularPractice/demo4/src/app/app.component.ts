import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //ngIf variable
  str:string = 'yes';
  a:number = 3;
  b: number = 2;
  myFunc(): boolean {
    return true;
  }

  //ngSwitch variable
  myVar: string = 'A';

  choice: number = 2;

  //ngStyle
  color: string;
  fontSize: number;
  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }

  //ngClass
  isBordered: boolean = true;
  classesObj: Object = {'bordered-box': false };
  classList: string[] = ['blue', 'round'];

  //ngFor
  cities: string[] = ['Miami', 'Sao Paulo', 'New York'];
  people: Object[] = [
    { name: 'Anderson', age: 35, city: 'Sao Paulo' },
    { name: 'John', age: 12, city: 'Miami' },
    { name: 'Peter', age: 22, city: 'New York' }
  ];
  peopleByCity: Object[] = [
    {
      city: 'Miami',
      people: [
        { name: 'John', age: 12 },
        { name: 'Angel', age: 22 }
      ]
    },
    {
      city: 'Sao Paulo',
      people: [
        { name: 'Anderson', age: 35 },
        { name: 'Felipe', age: 36 }
      ]
    }
  ];

  //ngNonBindable
  content: string = 'Some text';
}
