import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ang-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private router: Router) {
}

  goToPostsPage() {
    this.router.navigate(['/posts'])
  }
}
