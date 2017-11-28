import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comic } from './models/Comic';
import { CartService } from './services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
   ) { }

  results: any;
  cart: any
  data: any[] = [];


  ngOnInit() {

    // Make the HTTP request:
    this.http.get('http://localhost:3000/comics').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log(this.results)
    });

  }

  sendToCart(title, price) {


    this.cartService.insertData(title, price)

  }




}
