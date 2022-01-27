import {Component, EventEmitter, Input, Output, OnInit, OnDestroy} from '@angular/core';
import {ensureOutputPaths} from "@angular-devkit/build-angular/src/utils/output-paths";

@Component({
  selector: 'child-comp',
  template: `<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />`
})
export class ChildComponent{

  @Input() userName:string = "";
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string){

    this.userName = model;
    this.userNameChange.emit(model);
  }
}
