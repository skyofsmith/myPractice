import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-display',
  inputs: ['price'],
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {

  price: number;

  constructor() { }

  ngOnInit() {
  }

}
