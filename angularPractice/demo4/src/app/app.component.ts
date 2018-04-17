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
}
