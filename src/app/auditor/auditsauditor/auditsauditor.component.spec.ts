import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsauditorComponent } from './auditsauditor.component';

describe('AuditsauditorComponent', () => {
  let component: AuditsauditorComponent;
  let fixture: ComponentFixture<AuditsauditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditsauditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditsauditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
