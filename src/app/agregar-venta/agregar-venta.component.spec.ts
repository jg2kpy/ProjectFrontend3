import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVentaComponent } from './agregar-venta.component';

describe('AgregarVentaComponent', () => {
  let component: AgregarVentaComponent;
  let fixture: ComponentFixture<AgregarVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
