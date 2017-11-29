import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor() { }

  dataArray: any[] = [];
  priceArray: any[] = [];


  insertData(item, price) {

    this.dataArray.unshift(item);

    this.priceArray.unshift(price);
  }

}
