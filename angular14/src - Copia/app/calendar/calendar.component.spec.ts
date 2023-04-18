import { TestBed } from '@angular/core/testing';

import { PoDividerModule } from '@po-ui/ng-components';
import { Appcalendar } from './calendar.component';
import { AppModule } from "../app.Module";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PoDividerModule,
        AppModule,
        
      ],
      declarations: [
        Appcalendar
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Appcalendar);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
