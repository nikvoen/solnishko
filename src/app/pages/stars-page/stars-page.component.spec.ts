import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsPageComponent } from './stars-page.component';

describe('StarsPageComponent', () => {
  let component: StarsPageComponent;
  let fixture: ComponentFixture<StarsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarsPageComponent]
    });
    fixture = TestBed.createComponent(StarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
