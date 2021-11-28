import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarpedidoComponent } from './eliminarpedido.component';

describe('EliminarpedidoComponent', () => {
  let component: EliminarpedidoComponent;
  let fixture: ComponentFixture<EliminarpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarpedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
