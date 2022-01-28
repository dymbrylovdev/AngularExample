import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChildComponent} from "./child.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BoldDirective} from "./bold.directive";
import {CountdownLocalVarParentComponent} from "./templateTimer/CountdownLocalVarParentComponent";
import {CountdownTimerComponent} from "./templateTimer/CountdownTimerComponent";
import {ZippyMultislotComponent} from "./templateNgContent/ZippyMultislotComponent.component";
import { FormComponent } from './FormsComponent/form/form.component';
import {DataService} from "./TestService/data.service";
import { ValidateFormComponent } from './FormsComponent/validate-form/validate-form.component';
import {DataUserService} from "./TestService/dataUser.service";
import {HttpService} from "./TestService/http.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BoldDirective,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    ZippyMultislotComponent,
    FormComponent,
    ValidateFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
      HttpClientModule
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
