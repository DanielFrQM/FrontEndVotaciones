import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreandoComponent } from './creando.component';

describe('CreandoComponent', () => {
  let component: CreandoComponent;
  let fixture: ComponentFixture<CreandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
