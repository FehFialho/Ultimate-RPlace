import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPage } from './canvas-page';

describe('CanvasPage', () => {
  let component: CanvasPage;
  let fixture: ComponentFixture<CanvasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CanvasPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
