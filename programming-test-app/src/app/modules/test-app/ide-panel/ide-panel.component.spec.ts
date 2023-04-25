import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdePanelComponent } from './ide-panel.component';

describe('IdePanelComponent', () => {
  let component: IdePanelComponent;
  let fixture: ComponentFixture<IdePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
