import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSmallTableComponent } from './service-small-table.component';

describe('ServiceSmallTableComponent', () => {
  let component: ServiceSmallTableComponent;
  let fixture: ComponentFixture<ServiceSmallTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSmallTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSmallTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
