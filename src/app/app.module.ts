import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonListService } from './person-list.service';
import { PersonDetailsComponent } from './person-details/person-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PersonListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
