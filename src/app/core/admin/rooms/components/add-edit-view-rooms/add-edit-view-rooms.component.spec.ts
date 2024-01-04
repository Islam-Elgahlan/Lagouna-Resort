import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewRoomsComponent } from './add-edit-view-rooms.component';

describe('AddEditViewRoomsComponent', () => {
  let component: AddEditViewRoomsComponent;
  let fixture: ComponentFixture<AddEditViewRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditViewRoomsComponent]
    });
    fixture = TestBed.createComponent(AddEditViewRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
