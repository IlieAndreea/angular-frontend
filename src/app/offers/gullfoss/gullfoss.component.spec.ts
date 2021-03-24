import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GullfossComponent } from './gullfoss.component';

describe('GullfossComponent', () => {
  let component: GullfossComponent;
  let fixture: ComponentFixture<GullfossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GullfossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GullfossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
