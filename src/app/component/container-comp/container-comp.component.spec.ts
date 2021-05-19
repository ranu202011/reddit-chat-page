import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCompComponent } from './container-comp.component';

describe('ContainerCompComponent', () => {
  let component: ContainerCompComponent;
  let fixture: ComponentFixture<ContainerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
