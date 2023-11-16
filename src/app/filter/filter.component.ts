import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from '../filtermodel';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }
  filt:Filter = new Filter()
  @Output()
  filterEmitter:EventEmitter<Filter> = new EventEmitter()

  ngOnInit(): void {
  }
  onFilterPriceChange(){
  this.filterEmitter.emit(this.filt)
  }

}
