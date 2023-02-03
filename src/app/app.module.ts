import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ParentComponent} from "./parent/parent.component";
import { ChildComponent } from './parent/child/child.component';
import { TodosComponent } from './todos/todos/todos.component';
import { HttpClientModule} from "@angular/common/http";
import { FormTemplateComponent } from './forms/form-template/form-template.component';
import { FormReactiveComponent } from './forms/form-reactive/form-reactive.component';
import { CounterComponent } from './counter/counter.component';
import {CounterService} from "./services/counter.service";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TodosComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
