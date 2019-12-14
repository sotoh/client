import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomequestionsComponent } from './homequestions.component';

describe('HomequestionsComponent', () => {
  let component: HomequestionsComponent;
  let fixture: ComponentFixture<HomequestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomequestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomequestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
