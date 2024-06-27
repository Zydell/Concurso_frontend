import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPrincipaltestComponent } from './pg-principaltest.component';

describe('PgPrincipaltestComponent', () => {
  let component: PgPrincipaltestComponent;
  let fixture: ComponentFixture<PgPrincipaltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgPrincipaltestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgPrincipaltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
