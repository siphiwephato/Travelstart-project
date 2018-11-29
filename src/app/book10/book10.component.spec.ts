import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book10Component } from './book10.component';

describe('Book10Component', () => {
  let component: Book10Component;
  let fixture: ComponentFixture<Book10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
