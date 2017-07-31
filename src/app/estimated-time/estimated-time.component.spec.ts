import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedTimeComponent } from './estimated-time.component';

describe('EstimatedTimeComponent', () => {
  let component: EstimatedTimeComponent;
  let fixture: ComponentFixture<EstimatedTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatedTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct class', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.EstimatedTime')).toBeTruthy();
  });

});
