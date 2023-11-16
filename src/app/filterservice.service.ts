import { Injectable } from '@angular/core';
import { Filter } from './filtermodel';

@Injectable({
  providedIn: 'root'
})
export class FilterserviceService {

  constructor() { }
  getFIlteredProduct(arr:any[],filt:Filter){
    if (filt.minprice > 0 && filt.maxprice == 0){
      return arr.filter(i=> Number(i.price) > Number(filt.minprice))
    }
    else if (filt.minprice == 0 && filt.maxprice != 0){
      return arr.filter(i=> Number(i.price) < Number(filt.maxprice))
    }
    else{
      return arr.filter(i=> Number(i.price) > Number(filt.minprice)
      && Number(i.price ) < filt.maxprice)
    }

  }
}
