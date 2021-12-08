import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductosyserviciosComponent } from './eliminar-productosyservicios.component';

describe('EliminarProductosyserviciosComponent', () => {
  let component: EliminarProductosyserviciosComponent;
  let fixture: ComponentFixture<EliminarProductosyserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProductosyserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProductosyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
