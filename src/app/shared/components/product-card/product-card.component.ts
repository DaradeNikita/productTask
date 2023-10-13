import { Component, Input, OnInit } from '@angular/core';
import { IprodCat } from '../../models/prodCatg';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() getProduct : Array<IprodCat> = [];
  productCategory : string = "Catlog";
  constructor() { }

  ngOnInit(): void {
  }

}
