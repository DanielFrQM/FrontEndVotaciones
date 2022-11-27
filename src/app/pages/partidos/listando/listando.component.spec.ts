import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListandoComponent } from './listando.component';

describe('ListandoComponent', () => {
  let component: ListandoComponent;
  let fixture: ComponentFixture<ListandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
