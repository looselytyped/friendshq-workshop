import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonComponent } from './show-person.component';
import { FullNamePipe } from '..';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Friend, Gender } from '../../shared';

fdescribe('ShowPersonComponent', () => {
  let component: ShowPersonComponent;
  let fixture: ComponentFixture<ShowPersonComponent>;
  let nameDisplayEl: DebugElement;
  let favEl: DebugElement;
  let friend: Friend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowPersonComponent,
        FullNamePipe,
      ]
    });

    friend = {
      id: 1,
      firstName: 'Michelle',
      lastName: 'Mulroy',
      gender: Gender.Female,
      fav: true
    };

    fixture = TestBed.createComponent(ShowPersonComponent);
    component = fixture.componentInstance;

    nameDisplayEl = fixture.debugElement.query(By.css('h5.mb-1'));
    favEl = fixture.debugElement.query(By.css('span.fa'));
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should display the full name', () => {
    component.friend = friend;
    fixture.detectChanges();
    expect(nameDisplayEl.nativeElement.textContent).toContain('Michelle Mulroy');
  });

  it('should un-like the friend when clicked on', () => {
    let updatedFriend;
    component.friend = friend;
    component.notifyParent.subscribe(f => updatedFriend = f);
    fixture.detectChanges();

    favEl.triggerEventHandler('click', null);
    expect(updatedFriend.fav).toBe(false);

    // click it again
    favEl.triggerEventHandler('click', null);
    expect(updatedFriend.fav).toBe(true);
  });
});
