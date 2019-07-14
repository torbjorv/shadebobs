import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostSlider2Component } from './ghost-slider2.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GhostSlider2Component', () => {
  let component: GhostSlider2Component;
  let fixture: ComponentFixture<GhostSlider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ GhostSlider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostSlider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
