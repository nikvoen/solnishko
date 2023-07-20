import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  private _router: Router;
  slug: string;

  constructor(router: Router) {
    this._router = router;
    this.slug = ''
  }
  navigateToPage(slug: string) {
    this.slug = slug;
    this._router.navigate(['/' + slug])
  }
}
