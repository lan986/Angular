import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T8Component } from './t8.component';

describe('T8Component', () => {
  let component: T8Component;
  let fixture: ComponentFixture<T8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
