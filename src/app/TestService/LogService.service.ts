import {Injectable} from "@angular/core";

export class LogService{

  write(logMessage:string){

    console.log(logMessage);
  }
}
