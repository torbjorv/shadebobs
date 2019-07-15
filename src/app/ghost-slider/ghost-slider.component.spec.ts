import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostSliderComponent } from './ghost-slider.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GhostSliderComponent', () => {
  let component: GhostSliderComponent;
  let fixture: ComponentFixture<GhostSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ GhostSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
