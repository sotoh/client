import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalauditComponent } from './internalaudit.component';

describe('InternalauditComponent', () => {
  let component: InternalauditComponent;
  let fixture: ComponentFixture<InternalauditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalauditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
