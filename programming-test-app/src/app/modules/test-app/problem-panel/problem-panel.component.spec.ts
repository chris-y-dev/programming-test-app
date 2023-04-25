import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemPanelComponent } from './problem-panel.component';

describe('ProblemPanelComponent', () => {
  let component: ProblemPanelComponent;
  let fixture: ComponentFixture<ProblemPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
