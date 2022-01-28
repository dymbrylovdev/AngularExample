import {Injectable} from '@angular/core';
import {NgModel} from "@angular/forms";

export class Phone {
  constructor(public title: string,
              public price: number,
              public company: string)
  { }
}

@Injectable()
export class DataService {
  private _phones : Phone[] = []
  private _companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
  private _phone: Phone = new Phone("",0,"")
  constructor(){}


  get phones(): Phone[] {
    return this._phones;
  }

  get companies(): string[] {
    return this._companies;
  }

  get phone(): Phone {
    return this._phone;
  }

  addPhone(title:NgModel, price:NgModel, company:NgModel ) {
      this.phones.push(this.phone)
    }
}
