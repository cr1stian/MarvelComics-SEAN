import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comic } from '../../models/Comic';
import { CartService } from '../../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  results: any;
  counter : number = 0;
  title: string;
  price: any;
  img: any;


  ngOnInit() {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/comics').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log(this.results)
    });
  }


  sendToCart(title, price, img) {

    var item = {
      title,
      price,
      img
    }

    this.cartService.insertData(item, price);

  }

  increment(){
       this.counter += 1;
     }

}
