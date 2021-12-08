import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarAsesorComponent } from './asignar-asesor.component';

describe('AsignarAsesorComponent', () => {
  let component: AsignarAsesorComponent;
  let fixture: ComponentFixture<AsignarAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
