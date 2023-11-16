import { Component, OnInit } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { FilterserviceService } from '../filterservice.service';
import { Filter } from '../filtermodel';

@Component({
  selector: 'app-maybeline',
  templateUrl: './maybeline.component.html',
  styleUrls: ['./maybeline.component.scss']
})
export class MaybelineComponent implements OnInit {

  constructor(private Http:HttpClient, private filt:FilterserviceService) { }
   arr:any [] = []
   filteredProducts:any[] = []
   page:number = 1;
   allpages:number = 0
  ngOnInit(): void {
    this.Http.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .subscribe((data:any) => {
     this.arr = data
     this.filteredProducts = this.arr
     console.log(this.arr)
     this.allpages = this.filteredProducts.length
    })
  }
  onFilterDataChanged(event:Filter){
   this.filteredProducts = this.filt.getFIlteredProduct(this.arr,event)
   this.allpages = this.filteredProducts.length

   console.log(this.filteredProducts)
  }

}
