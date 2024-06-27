import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgRecomendacionComponent } from './pg-recomendacion.component'; 

describe('PgRecomendacionComponent', () => {
  let component: PgRecomendacionComponent;
  let fixture: ComponentFixture<PgRecomendacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgRecomendacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
