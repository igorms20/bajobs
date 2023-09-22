import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVagaComponent } from './detalhes-vaga.component';

describe('DetalhesVagaComponent', () => {
  let component: DetalhesVagaComponent;
  let fixture: ComponentFixture<DetalhesVagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesVagaComponent]
    });
    fixture = TestBed.createComponent(DetalhesVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
