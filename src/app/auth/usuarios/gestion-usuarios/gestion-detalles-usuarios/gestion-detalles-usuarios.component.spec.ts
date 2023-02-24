import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDetallesUsuariosComponent } from './gestion-detalles-usuarios.component';

describe('GestionDetallesUsuariosComponent', () => {
  let component: GestionDetallesUsuariosComponent;
  let fixture: ComponentFixture<GestionDetallesUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDetallesUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDetallesUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
