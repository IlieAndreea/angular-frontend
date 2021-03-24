import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolomitesComponent } from './dolomites.component';

describe('DolomitesComponent', () => {
  let component: DolomitesComponent;
  let fixture: ComponentFixture<DolomitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolomitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolomitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
