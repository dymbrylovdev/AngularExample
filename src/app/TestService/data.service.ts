import {Injectable} from '@angular/core';
import {LogService} from "./LogService.service";


@Injectable()
export class DataService{

  private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];
  constructor(private _logService: LogService){

  }

  getData(): string[] {

    this._logService.write("операция получения данных");
    return this.data;
  }
  addData(name: string){

    this.data.push(name);
    this._logService.write("операция добавления данных");
  }


}
