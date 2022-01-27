import {Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {DataService, Phone} from "../../TestService/data.service";
import {NgModel} from "@angular/forms";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  constructor(private _data: DataService) {
  }

  getPhone(): Phone {
    return this._data.getPhone()
  }

  getCompanies(): string[] {
    return this._data.getCompanies()
  }

  addPhone(title:NgModel, price:NgModel, company:NgModel ) {

    this._data.getPhones().push(this.getPhone())
  }
  getPhones(): Phone[]{
    return this._data.getPhones()
  }


  onTitleChange() {
    if(this.getPhone().title=="нет ") {
      this.getPhone().title = ""
      alert("не извстно");
    }
  }
}

