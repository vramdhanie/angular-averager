import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapsComponent } from './laps.component';

describe('LapsComponent', () => {
  let component: LapsComponent;
  let fixture: ComponentFixture<LapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
