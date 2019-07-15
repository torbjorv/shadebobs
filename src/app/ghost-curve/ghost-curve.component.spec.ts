import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostCurveComponent } from './ghost-curve.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GhostCurveComponent', () => {
  let component: GhostCurveComponent;
  let fixture: ComponentFixture<GhostCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ GhostCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
