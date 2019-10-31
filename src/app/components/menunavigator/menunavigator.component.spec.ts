import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunavigatorComponent } from './menunavigator.component';

describe('MenunavigatorComponent', () => {
  let component: MenunavigatorComponent;
  let fixture: ComponentFixture<MenunavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenunavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenunavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
