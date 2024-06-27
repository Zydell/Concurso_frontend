import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgSeccionComponent } from './pg-seccion.component';

describe('PgSeccionComponent', () => {
  let component: PgSeccionComponent;
  let fixture: ComponentFixture<PgSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgSeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
