import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapComponent } from './lap.component';

describe('LapComponent', () => {
  let component: LapComponent;
  let fixture: ComponentFixture<LapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
