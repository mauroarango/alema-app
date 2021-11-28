import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpersonComponent } from './editarperson.component';

describe('EditarpersonComponent', () => {
  let component: EditarpersonComponent;
  let fixture: ComponentFixture<EditarpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
