import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoYServicioComponent } from './crear-producto-y-servicio.component';

describe('CrearProductoYServicioComponent', () => {
  let component: CrearProductoYServicioComponent;
  let fixture: ComponentFixture<CrearProductoYServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProductoYServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductoYServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
