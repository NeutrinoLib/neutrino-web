import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvpropertiesPage } from './kvproperties.page';

describe('KvpropertiesPage', () => {
  let component: KvpropertiesPage;
  let fixture: ComponentFixture<KvpropertiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvpropertiesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvpropertiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
