import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpersonComponent } from './buscarperson.component';

describe('BuscarpersonComponent', () => {
  let component: BuscarpersonComponent;
  let fixture: ComponentFixture<BuscarpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
