import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaclettePartyComponent } from './raclette-party.component';

describe('RaclettePartyComponent', () => {
  let component: RaclettePartyComponent;
  let fixture: ComponentFixture<RaclettePartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaclettePartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaclettePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
