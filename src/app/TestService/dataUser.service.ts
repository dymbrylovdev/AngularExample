
import {Injectable} from '@angular/core';
import {NgModel} from "@angular/forms";
import {User} from "../user";



@Injectable()
export class DataUserService {
  private _users : User[] =  [
    new User("Naikita", "nikita@mail.ru","9835370217"),
    new User("Mihail", "mihail@mail.ru","9835370217"),
    new User("Vlad", "valad@mail.ru","9835370217"),
    new User("Gunga", "gunga@mail.ru","9835370217"),
    new User("Igor", "igor@mail.ru","9835370217"),
  ]
  constructor() {
  }

  get users(): User[] {
    return this._users;
  }

}
