import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6Component } from './t6.component';

describe('T6Component', () => {
  let component: T6Component;
  let fixture: ComponentFixture<T6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
