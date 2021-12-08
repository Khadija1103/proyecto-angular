import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductosyserviciosComponent } from './editar-productosyservicios.component';

describe('EditarProductosyserviciosComponent', () => {
  let component: EditarProductosyserviciosComponent;
  let fixture: ComponentFixture<EditarProductosyserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProductosyserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProductosyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
