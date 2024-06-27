import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgLaboratoriosComponent } from './pg-laboratorios.component';

describe('PgLaboratoriosComponent', () => {
  let component: PgLaboratoriosComponent;
  let fixture: ComponentFixture<PgLaboratoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgLaboratoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgLaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
