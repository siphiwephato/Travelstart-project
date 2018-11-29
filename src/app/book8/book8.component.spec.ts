import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book8Component } from './book8.component';

describe('Book8Component', () => {
  let component: Book8Component;
  let fixture: ComponentFixture<Book8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
