import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, NgModel, Validators} from "@angular/forms";
import {DataUserService, User} from "../../TestService/dataUser.service";


@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css'],
})
export class ValidateFormComponent implements OnInit {
  private _myForm: FormGroup

  constructor(private _dataUsers: DataUserService) {

    this._myForm = new FormGroup({
      "userName": new FormControl("", Validators.required,),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email,
        this.validateDataUser
      ]),
      "userPhone": new FormControl("", [
        Validators.pattern("[0-9]{10}"),
     ]),
    })
  }


  get dataUsers(): DataUserService {
    return this._dataUsers;
  }

  addUser(formData: FormGroup) {
    console.log(formData)
    if (formData.valid) {
      console.log(formData.value)
    } else {
      alert("Не корректные данные!")
    }
  }

  get myForm(): FormGroup {
    return this._myForm;
  }


  ngOnInit(): void {
  }

  validateDataUser(control: FormControl): {[s:string]:boolean}|null {

    for (const user of this._dataUsers.users) {
      if(!(control.value=== user.phone || control.value === user.email) ){
        return {"userName": true};
      }else {
        alert("lol")
      }
    }
    return null;
  }
}
