import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor() { }

  dataArray: any[] = [];

  insertData(title: any, price: any) {
    // this.dataArray.length = 0;
    this.dataArray.unshift(title, price);
      console.log(title, price)
  }

}
