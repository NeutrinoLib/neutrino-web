import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPage } from './services.page';

describe('ServicesPage', () => {
  let component: ServicesPage;
  let fixture: ComponentFixture<ServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
