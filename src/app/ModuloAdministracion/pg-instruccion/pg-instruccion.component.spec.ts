import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInstruccionComponent } from './pg-instruccion.component'; 

describe('PgInstruccionComponent', () => {
  let component: PgInstruccionComponent;
  let fixture: ComponentFixture<PgInstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgInstruccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgInstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
