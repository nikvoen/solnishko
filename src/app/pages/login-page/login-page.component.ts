import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
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
