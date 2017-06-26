import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvpropertiesSmallTableComponent } from './kvproperties-small-table.component';

describe('KvpropertiesSmallTableComponent', () => {
  let component: KvpropertiesSmallTableComponent;
  let fixture: ComponentFixture<KvpropertiesSmallTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvpropertiesSmallTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvpropertiesSmallTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
