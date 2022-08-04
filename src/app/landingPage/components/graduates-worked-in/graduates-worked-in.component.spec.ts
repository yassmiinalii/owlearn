import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatesWorkedInComponent } from './graduates-worked-in.component';

describe('GraduatesWorkedInComponent', () => {
  let component: GraduatesWorkedInComponent;
  let fixture: ComponentFixture<GraduatesWorkedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduatesWorkedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduatesWorkedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
