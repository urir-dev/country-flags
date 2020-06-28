import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsTableeComponent } from './flags-tablee.component';

describe('FlagsTableeComponent', () => {
  let component: FlagsTableeComponent;
  let fixture: ComponentFixture<FlagsTableeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagsTableeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsTableeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
