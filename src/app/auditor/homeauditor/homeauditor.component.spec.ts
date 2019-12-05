import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeauditorComponent } from './homeauditor.component';

describe('HomeauditorComponent', () => {
  let component: HomeauditorComponent;
  let fixture: ComponentFixture<HomeauditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeauditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeauditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
