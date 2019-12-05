import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeauditsComponent } from './homeaudits.component';

describe('HomeauditsComponent', () => {
  let component: HomeauditsComponent;
  let fixture: ComponentFixture<HomeauditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeauditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeauditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
