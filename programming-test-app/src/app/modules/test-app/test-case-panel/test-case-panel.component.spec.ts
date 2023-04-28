import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCasePanelComponent } from './test-case-panel.component';

describe('TestCasePanelComponent', () => {
  let component: TestCasePanelComponent;
  let fixture: ComponentFixture<TestCasePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCasePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCasePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
