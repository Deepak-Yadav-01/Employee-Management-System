import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmp } from './list-emp';

describe('ListEmp', () => {
  let component: ListEmp;
  let fixture: ComponentFixture<ListEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
