import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { ApiserviceService } from 'src/app/services/apiservice.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productList : any;
public filtercategory:any;
  constructor( private  api : ApiserviceService) { }
 searchKey:string=""
 
  filter(category: string){
      this.filtercategory=this.productList.filter(
       ( a:any)  =>{
       
         if(a.category== category || category==''){
         return a
        
         }
     
        }
       )
       
  }
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe( res => {
    
this.productList = res;
this.filtercategory=res;
this.productList.forEach((a:any)=> {
  if(a.category==="men's clothing" || a.category==="women's clothing" ){
  a.category="fashion"}
  
});
    })


    this.api.search.subscribe( searchTerm=>{
      this.searchKey=searchTerm
      
    })
   
  }
//   chooseElectronics(){
//     this.api.getProduct().pipe(
//       filter( (res)=> {
//         // console.log(res);
//         return res.category==='electronics'
//       })
//     ).subscribe( res => {
//       console.log(res);
// this.productList = res;
//     })

//   }
  onAddItem(item:any)
  {
this.api.setProducts(item)
  }
  
 
}
