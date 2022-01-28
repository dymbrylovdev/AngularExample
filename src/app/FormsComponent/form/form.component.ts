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


  get data(): DataService {
    return this._data;
  }

  onTitleChange() {
    if(this.data.phone.title=="нет ") {
      this.data.phone.title = ""
      alert("не извстно");
    }
  }
}

