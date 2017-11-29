import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { HomepageComponent } from './components/homepage/homepage.component';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CartService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
