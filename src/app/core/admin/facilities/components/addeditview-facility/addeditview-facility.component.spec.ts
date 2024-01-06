import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditviewFacilityComponent } from './addeditview-facility.component';

describe('AddeditviewFacilityComponent', () => {
  let component: AddeditviewFacilityComponent;
  let fixture: ComponentFixture<AddeditviewFacilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditviewFacilityComponent]
    });
    fixture = TestBed.createComponent(AddeditviewFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
