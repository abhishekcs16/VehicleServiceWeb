import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFaultListComponent } from './service-fault-list.component';

describe('ServiceFaultListComponent', () => {
  let component: ServiceFaultListComponent;
  let fixture: ComponentFixture<ServiceFaultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFaultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFaultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
