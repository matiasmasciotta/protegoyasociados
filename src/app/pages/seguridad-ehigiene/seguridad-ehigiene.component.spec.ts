import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadEHigieneComponent } from './seguridad-ehigiene.component';

describe('SeguridadEHigieneComponent', () => {
  let component: SeguridadEHigieneComponent;
  let fixture: ComponentFixture<SeguridadEHigieneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguridadEHigieneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadEHigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
