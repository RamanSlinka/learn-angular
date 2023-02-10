import { Component } from '@angular/core';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'ang-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
constructor(public postsService: PostService) {
}
}
