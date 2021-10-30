import { Component, DoCheck, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck{

 
  public products : any=[];
  public length:number=0;

  public grandTotal !: number;
  constructor(private api : ApiserviceService, private router: Router) { }

getItem(){
  // alert("hi")
  this.products =this.api.getProducts()
 this.length=this.products.length;
}
back(){
  this.router.navigate(['/products'])
}
 deleteItem(i: any){
   this.api.deleteProduct(i)
 
 }
 ngDoCheck(){
  
 }
  ngOnInit(): void {
     
    this.getItem();
    
   

    // this.api.getProducts()
    // .subscribe(res=>{
     
    //   this.products = res;
    //   // this.grandTotal = this.api.getTotalPrice();
    //   console.log(res);
    // })
   
  }





//     console.log("hey"),
// this.api.OnItemSelected.subscribe(
//   ((res) => {
//   console.log(res)
//   this.products=res})
// )


   

  }
 


