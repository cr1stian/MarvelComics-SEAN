import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  datas: string[] = [];


  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
   ) { }

  ngOnInit() {
    this.datas = this.cartService.dataArray
    console.log(this.datas)
  }

}
