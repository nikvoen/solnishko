import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent {
  private _router: Router;
  constructor(router: Router) {
    this._router = router;
  }
}
