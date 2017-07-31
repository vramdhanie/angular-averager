import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ItemCountComponent } from './item-count/item-count.component';
import { EstimatedTimeComponent } from './estimated-time/estimated-time.component';
import { ControlsComponent } from './controls/controls.component';
import { LapComponent } from './lap/lap.component';
import { LapsComponent } from './laps/laps.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TimerComponent,
        ItemCountComponent,
        EstimatedTimeComponent,
        ControlsComponent,
        LapComponent,
        LapsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Line Averager');
  }));

  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
