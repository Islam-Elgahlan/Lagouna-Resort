import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewUserComponent } from './add-edit-view-user.component';

describe('AddEditViewUserComponent', () => {
  let component: AddEditViewUserComponent;
  let fixture: ComponentFixture<AddEditViewUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditViewUserComponent]
    });
    fixture = TestBed.createComponent(AddEditViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});