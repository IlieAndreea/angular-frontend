import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaliComponent } from './bali.component';

describe('BaliComponent', () => {
  let component: BaliComponent;
  let fixture: ComponentFixture<BaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
