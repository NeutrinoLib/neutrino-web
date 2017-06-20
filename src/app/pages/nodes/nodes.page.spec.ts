import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesPage } from './nodes.page';

describe('NodesComponent', () => {
  let component: NodesPage;
  let fixture: ComponentFixture<NodesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
