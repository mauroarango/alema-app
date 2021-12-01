import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarpedidoComponent } from './asignarpedido.component';

describe('AsignarpedidoComponent', () => {
  let component: AsignarpedidoComponent;
  let fixture: ComponentFixture<AsignarpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarpedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
