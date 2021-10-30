import { Component, DoCheck, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(private api: ApiserviceService) { }
 public badge : number = 0
 public searchTerm:string="";
  ngOnInit(): void {
     
  }
  search(event:any)
  {
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.api.search.next(this.searchTerm);
    console.log(this.searchTerm)
  }
  ngDoCheck(){
    
  this. badge = this.api.length
  
  }

}
