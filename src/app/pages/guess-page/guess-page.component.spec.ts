import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessPageComponent } from './guess-page.component';

describe('GuessPageComponent', () => {
  let component: GuessPageComponent;
  let fixture: ComponentFixture<GuessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessPageComponent]
    });
    fixture = TestBed.createComponent(GuessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
