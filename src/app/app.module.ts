import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HttpModule } from '@angular/http';
import { ItemComponent } from './item/item.component';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ItemComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
