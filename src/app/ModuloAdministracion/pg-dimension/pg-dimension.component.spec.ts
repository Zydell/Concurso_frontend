import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgDimensionComponent } from './pg-dimension.component';

describe('PgDimensionComponent', () => {
  let component: PgDimensionComponent;
  let fixture: ComponentFixture<PgDimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgDimensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

