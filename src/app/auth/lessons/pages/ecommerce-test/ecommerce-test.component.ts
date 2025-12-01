import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Iproduct{
  name:string ,
  price:number,
  quantity:number,
  total:number,
  type: string
}

@Component({
  selector: 'app-ecommerce-test',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './ecommerce-test.component.html',
  styleUrl: './ecommerce-test.component.css'
})
export class EcommerceTestComponent {

  selectedtype:string =""

  filteredProducts :Iproduct[]=[]

  products :Iproduct[] =[{
    name:"shoes",
    price:100,
    quantity:2,
    total:200,
    type:'asta'
  },{
    name:"clothes",
    price:100,
    quantity:2,
    total:200,type:"asta"
  },{
    name:"bag",
    price:100,
    quantity:2,
    total:200,
    type:"bsta"
  },{
    name:"belt",
    price:100,
    quantity:2,
    total:200,
    type:"bsta"
  }] 



  constructor(){
    this.filteredProducts = this.products
  }

  filterSelected(){
    if (this.selectedtype=== "") return
    this.filteredProducts = this.products.filter(data=>data.type===this.selectedtype)
  }
}
