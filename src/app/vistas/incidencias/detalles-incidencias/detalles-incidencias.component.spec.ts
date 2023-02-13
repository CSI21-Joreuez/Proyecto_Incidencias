import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesIncidenciasComponent } from './detalles-incidencias.component';

describe('DetallesIncidenciasComponent', () => {
  let component: DetallesIncidenciasComponent;
  let fixture: ComponentFixture<DetallesIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
