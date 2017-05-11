import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterdetaiComponent } from './newsletterdetai.component';

describe('NewsletterdetaiComponent', () => {
  let component: NewsletterdetaiComponent;
  let fixture: ComponentFixture<NewsletterdetaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterdetaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterdetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
