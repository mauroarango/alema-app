import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarpersonComponent } from './eliminarperson.component';

describe('EliminarpersonComponent', () => {
  let component: EliminarpersonComponent;
  let fixture: ComponentFixture<EliminarpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
