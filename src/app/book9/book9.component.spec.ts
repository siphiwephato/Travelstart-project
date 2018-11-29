import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book9Component } from './book9.component';

describe('Book9Component', () => {
  let component: Book9Component;
  let fixture: ComponentFixture<Book9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
