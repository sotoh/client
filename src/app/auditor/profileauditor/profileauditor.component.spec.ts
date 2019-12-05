import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileauditorComponent } from './profileauditor.component';

describe('ProfileauditorComponent', () => {
  let component: ProfileauditorComponent;
  let fixture: ComponentFixture<ProfileauditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileauditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileauditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
