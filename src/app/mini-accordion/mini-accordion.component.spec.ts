import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAccordionComponent } from './mini-accordion.component';

describe('MiniAccordionComponent', () => {
  let component: MiniAccordionComponent;
  let fixture: ComponentFixture<MiniAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
