import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IprodCat } from './shared/models/prodCatg';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prodCatTask';
  productsArray : Array<IprodCat> = [{
    prodTitle : "Realme",
    prodDescription : `Realme ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corporis beatae fugit? Quibusdam, saepe quo.`,
    prodCategory :"Product"
  },
  {
    prodTitle : "Iphone",
    prodDescription : `Iphone,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ipsa nobis aut et magni obcaecati rerum esse neque voluptates optio?`,
    prodCategory :"Catlog"
  }
]

@ViewChild("prodTitle")  prodTitle!: ElementRef;
@ViewChild("prodDescription") prodDescription !: ElementRef;

ngOnInit(): void {
  
}
onProdAdd(){
  if(this.prodTitle.nativeElement.value.length > 0 && this.prodDescription.nativeElement.value.length > 0)
  {
    let obj :IprodCat = {
      prodTitle: this.prodTitle.nativeElement.value,
      prodDescription: this.prodDescription.nativeElement.value,
      prodCategory: 'Product'
    }
    this.prodTitle.nativeElement.value = '',
    this.prodDescription.nativeElement.value = '',
    this.productsArray.push(obj);
  }
  }
onCatlogAdd(){
  if(this.prodTitle.nativeElement.value.length > 0 && this.prodDescription.nativeElement.value.length > 0){
    let obj :IprodCat = {
      prodTitle: this.prodTitle.nativeElement.value,
      prodDescription: this.prodDescription.nativeElement.value,
      prodCategory: 'Catlog'
    }
    this.prodTitle.nativeElement.value = '';
    this.prodDescription.nativeElement.value = '',
    this.productsArray.push(obj);
  }
  
  }
  
}
