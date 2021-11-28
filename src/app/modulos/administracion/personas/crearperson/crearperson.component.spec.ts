import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpersonComponent } from './crearperson.component';

describe('CrearpersonComponent', () => {
  let component: CrearpersonComponent;
  let fixture: ComponentFixture<CrearpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
