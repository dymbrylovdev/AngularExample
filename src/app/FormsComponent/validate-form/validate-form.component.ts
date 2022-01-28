import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, NgModel, Validators} from "@angular/forms";
import {HttpService} from "../../TestService/http.service";
import {User} from "../../user";


@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css'],
  providers: [HttpService]
})
export class ValidateFormComponent implements OnInit {
  private _users: User[] = []
  private _myForm: FormGroup

  constructor(private _httpService: HttpService) {

    this._httpService.getUsers().subscribe((data:User[])=>{
      this._users =  data;
      console.log(this._users , "1")
    })

    this._myForm = new FormGroup({
      "userName": new FormControl("", Validators.required,),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email,
      ]),
      "userPhone": new FormControl("", [
        Validators.pattern("[0-9]{10}"),
      ]),
    })
    console.log(this._users , "2")
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
    for (const user of this._users) {
      if(!(control.value=== user.phone || control.value === user.email) ){
        return {"userName": true};
      }else {
        alert("lol")
      }
    }
    return null;
  }

}
