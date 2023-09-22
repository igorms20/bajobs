import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasListComponent } from './vagas-list.component';

describe('VagasListComponent', () => {
  let component: VagasListComponent;
  let fixture: ComponentFixture<VagasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VagasListComponent]
    });
    fixture = TestBed.createComponent(VagasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
