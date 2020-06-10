import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliohealingComponent } from './portfoliohealing.component';

describe('PortfoliohealingComponent', () => {
  let component: PortfoliohealingComponent;
  let fixture: ComponentFixture<PortfoliohealingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliohealingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliohealingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
