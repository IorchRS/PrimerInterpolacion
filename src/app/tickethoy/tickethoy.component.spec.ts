import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickethoyComponent } from './tickethoy.component';

describe('TickethoyComponent', () => {
  let component: TickethoyComponent;
  let fixture: ComponentFixture<TickethoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickethoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickethoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
