import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book6Component } from './book6.component';

describe('Book6Component', () => {
  let component: Book6Component;
  let fixture: ComponentFixture<Book6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
