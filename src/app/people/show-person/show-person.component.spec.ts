import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonComponent } from './show-person.component';

describe('ShowPersonComponent', () => {
  let component: ShowPersonComponent;
  let fixture: ComponentFixture<ShowPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
