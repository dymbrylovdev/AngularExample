import {Component, ViewChild} from '@angular/core';
import {ChildComponent} from "./child.component";
import {DataService} from "./TestService/data.service";
import {LogService} from "./TestService/LogService.service";

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls:["./app.component.css"],
  providers: [DataService, LogService]
})
export class AppComponent {

  newItem: string = "";
  items: string[] = [];
  constructor(private _dataService: DataService){}

  addItem(name: string){
    for (let itemData of this._dataService.getData()){
        if (itemData.trim() === name.trim()){
          return alert("Уже существует!")
        }
    }
    this._dataService.addData(name);
  }
  ngOnInit(){
    this.items = this._dataService.getData();
  }

  get dataService(): DataService {
    return this._dataService;
  }
}
