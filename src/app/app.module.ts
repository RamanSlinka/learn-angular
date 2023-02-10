import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ParentComponent} from "./parent/parent.component";
import { ChildComponent } from './parent/child/child.component';
import { TodosComponent } from './todos/todos/todos.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FormTemplateComponent } from './forms/form-template/form-template.component';
import { FormReactiveComponent } from './forms/form-reactive/form-reactive.component';
import { CounterComponent } from './counter/counter.component';
import { CounterChildComponent } from './counter/counter-child/counter-child.component';
import { ServerWorkComponent } from './server-work/server-work.component';
import {AuthInterceptor} from "./services/auth.interceptor";
import { AboutComponent } from './routing/about/about.component';
import { AboutExtraComponent } from './routing/about-extra/about-extra.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { PostComponent } from './routing/post/post.component';
import { PostsComponent } from './routing/posts/posts.component';


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TodosComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    CounterComponent,
    CounterChildComponent,
    ServerWorkComponent,
    AboutComponent,
    AboutExtraComponent,
    RoutingComponent,
    HomeComponent,
    PostComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
