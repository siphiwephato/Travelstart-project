import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book7Component } from './book7.component';

describe('Book7Component', () => {
  let component: Book7Component;
  let fixture: ComponentFixture<Book7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
