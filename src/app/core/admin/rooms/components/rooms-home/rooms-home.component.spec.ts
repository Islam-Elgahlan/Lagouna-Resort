import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsHomeComponent } from './rooms-home.component';

describe('RoomsHomeComponent', () => {
  let component: RoomsHomeComponent;
  let fixture: ComponentFixture<RoomsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsHomeComponent]
    });
    fixture = TestBed.createComponent(RoomsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
