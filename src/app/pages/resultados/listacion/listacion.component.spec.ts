import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacionComponent } from './listacion.component';

describe('ListacionComponent', () => {
  let component: ListacionComponent;
  let fixture: ComponentFixture<ListacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
