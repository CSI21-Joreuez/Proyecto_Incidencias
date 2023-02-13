import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDetallesIncidenciasComponent } from './gestion-detalles-incidencias.component';

describe('GestionDetallesIncidenciasComponent', () => {
  let component: GestionDetallesIncidenciasComponent;
  let fixture: ComponentFixture<GestionDetallesIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDetallesIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDetallesIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
