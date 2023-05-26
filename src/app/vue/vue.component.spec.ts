import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueComponent } from './vue.component';

describe('VueComponent', () => {
  let component: VueComponent;
  let fixture: ComponentFixture<VueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueComponent]
    });
    fixture = TestBed.createComponent(VueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
