import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFaultComponent } from './service-fault.component';

describe('ServiceFaultComponent', () => {
  let component: ServiceFaultComponent;
  let fixture: ComponentFixture<ServiceFaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
