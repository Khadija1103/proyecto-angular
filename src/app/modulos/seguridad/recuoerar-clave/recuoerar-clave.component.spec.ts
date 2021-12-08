import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuoerarClaveComponent } from './recuoerar-clave.component';

describe('RecuoerarClaveComponent', () => {
  let component: RecuoerarClaveComponent;
  let fixture: ComponentFixture<RecuoerarClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuoerarClaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuoerarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
