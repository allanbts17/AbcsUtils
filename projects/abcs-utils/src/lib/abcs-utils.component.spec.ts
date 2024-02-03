import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcsUtilsComponent } from './abcs-utils.component';

describe('AbcsUtilsComponent', () => {
  let component: AbcsUtilsComponent;
  let fixture: ComponentFixture<AbcsUtilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbcsUtilsComponent]
    });
    fixture = TestBed.createComponent(AbcsUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
