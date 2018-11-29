import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book5Component } from './book5.component';

describe('Book5Component', () => {
  let component: Book5Component;
  let fixture: ComponentFixture<Book5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
