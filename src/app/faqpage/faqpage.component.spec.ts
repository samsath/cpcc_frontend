import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqpageComponent } from './faqpage.component';

describe('FaqpageComponent', () => {
  let component: FaqpageComponent;
  let fixture: ComponentFixture<FaqpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
