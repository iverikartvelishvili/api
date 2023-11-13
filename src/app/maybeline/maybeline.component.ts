import { Component, OnInit } from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-maybeline',
  templateUrl: './maybeline.component.html',
  styleUrls: ['./maybeline.component.scss']
})
export class MaybelineComponent implements OnInit {

  constructor(private Http:HttpClient) { }
   arr:any [] = []
   page:number = 1;
  ngOnInit(): void {
    this.Http.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .subscribe((data:any) => {
     this.arr = data
     console.log(this.arr)
    })
  }

}
