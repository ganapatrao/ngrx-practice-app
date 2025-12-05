import { NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  products :any[] =[]
  pageSize = 10;
  currentPage = 1;
  // paginatedItems:any[]=[]

  
  //of each page
  startIndex =0
  endindex = this.pageSize

  trackById(index: number, item: any): number {
  return item.id;
}

 constructor(){
  for(let i=0;i<100;i++){
    this.products.push({id:i+1,name:`product ${i}`,age:Math.floor(Math.random()*30)})
  }


 }

 get totalPages (){
  return (this.products.length/this.pageSize)

 }

 get paginatedItems (){

  console.log(this.startIndex,this.endindex)

   return this.products.slice(this.startIndex,this.endindex)
 }


 gotoPage(pagenumber:number){
  this.currentPage =pagenumber
  console.log(pagenumber,pagenumber-1,pagenumber)
  this.startIndex = ((pagenumber-1) * this.pageSize)
  this.endindex = pagenumber*this.pageSize


 }


 previouspage(){
  this.currentPage = this.currentPage -1
  this.gotoPage(this.currentPage)

 }

 nextPage(){
  this.currentPage = this.currentPage+1
    this.gotoPage(this.currentPage)

 }


}
