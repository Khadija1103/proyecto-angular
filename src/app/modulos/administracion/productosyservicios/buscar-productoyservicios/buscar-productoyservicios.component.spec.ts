import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductoyserviciosComponent } from './buscar-productoyservicios.component';

describe('BuscarProductoyserviciosComponent', () => {
  let component: BuscarProductoyserviciosComponent;
  let fixture: ComponentFixture<BuscarProductoyserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProductoyserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarProductoyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
