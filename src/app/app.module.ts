import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChildComponent} from "./child.component";
import {FormsModule} from "@angular/forms";
import {BoldDirective} from "./bold.directive";
import {CountdownLocalVarParentComponent} from "./templateTimer/CountdownLocalVarParentComponent";
import {CountdownTimerComponent} from "./templateTimer/CountdownTimerComponent";
import {ZippyMultislotComponent} from "./templateNgContent/ZippyMultislotComponent.component";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BoldDirective,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    ZippyMultislotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
