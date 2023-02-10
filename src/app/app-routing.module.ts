import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routing/about/about.component';
import {HomeComponent} from "./routing/home/home.component";
import {PostsComponent} from "./routing/posts/posts.component";


//http://localhost:4200/   -> HomeComponent
//http://localhost:4200/about   -> AboutComponent
//http://localhost:4200/posts   -> PostsComponent
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
