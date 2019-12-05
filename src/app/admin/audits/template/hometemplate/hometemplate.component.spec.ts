import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometemplateComponent } from './hometemplate.component';

describe('HometemplateComponent', () => {
  let component: HometemplateComponent;
  let fixture: ComponentFixture<HometemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
