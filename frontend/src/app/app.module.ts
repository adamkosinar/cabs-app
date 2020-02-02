import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CablistComponent } from './cablist/cablist.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
      AppComponent,
      CablistComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
