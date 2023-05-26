import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaisComponent } from './materiais.component';

describe('MateriaisComponent', () => {
  let component: MateriaisComponent;
  let fixture: ComponentFixture<MateriaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaisComponent]
    });
    fixture = TestBed.createComponent(MateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
