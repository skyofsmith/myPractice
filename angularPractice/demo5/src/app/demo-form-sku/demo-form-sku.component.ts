import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

  constructor() { }
  ngOnInit() { }

}
