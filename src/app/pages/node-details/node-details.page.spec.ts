import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDetailsPage } from './node-details.page';

describe('NodeDetailsPage', () => {
  let component: NodeDetailsPage;
  let fixture: ComponentFixture<NodeDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeDetailsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
