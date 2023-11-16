import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MaybelineComponent } from './maybeline/maybeline.component';
import { CardComponent } from './card/card.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterComponent } from './filter/filter.component'; 
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MaybelineComponent,
    CardComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
