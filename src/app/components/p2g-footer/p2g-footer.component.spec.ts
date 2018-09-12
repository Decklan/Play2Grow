import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2gFooterComponent } from './p2g-footer.component';

describe('P2gFooterComponent', () => {
  let component: P2gFooterComponent;
  let fixture: ComponentFixture<P2gFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2gFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2gFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
