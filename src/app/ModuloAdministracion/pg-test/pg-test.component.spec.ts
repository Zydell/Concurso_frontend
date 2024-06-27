import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PgTestComponent } from './pg-test.component'; 

describe('PgTestComponent', () => {
  let component: PgTestComponent;
  let fixture: ComponentFixture<PgTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
