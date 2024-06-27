import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgReservasComponent } from './pg-reservas.component';

describe('PgReservasComponent', () => {
  let component: PgReservasComponent;
  let fixture: ComponentFixture<PgReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
