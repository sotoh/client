import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfiComponent } from './ofi.component';

describe('OfiComponent', () => {
  let component: OfiComponent;
  let fixture: ComponentFixture<OfiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
