
import { HttpClient } from '@angular/common/http';
import {  EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
   public data : any = [];
   public length : number = 0;
  // public cartItemList : any =[]
  // public productList = new Subject<any>();

public search = new Subject<string>();
  constructor(private http : HttpClient) { }
  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
  
  }
  setProducts(item:any)
  {
   this. data.push(item);
   this.length = this.data.length
 
  }
  getProducts():any
  {
  
   return this.data;
  
  }
  deleteProduct( i: any)
  {
    this.data.splice(i,1)
    this.length = this.data.length
  }





















  // getProducts(){
  //   return this.productList.asObservable();
  // }
  // addtoCart(product : any){
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   // this.getTotalPrice();
  //   console.log(this.cartItemList)
  // }
  // getTotalPrice() : number{
  //   let grandTotal = 0;
  //   this.cartItemList.map((a:any)=>{
  //     grandTotal += a.total;
  //   })
  //   return grandTotal;
  // }
  









// OnItemSelected = new EventEmitter<any>();
// addtoCart(product : any){
//   this.cartItemList.push(product);
//   this.OnItemSelected.emit(this.cartItemList)
//   console.log(this.cartItemList)
// }



// setProduct(product : any){
//   this.cartItemList.push(...product);
//   this.productList.next(product);
// }





}
