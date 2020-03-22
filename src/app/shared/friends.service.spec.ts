import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Friend, Gender } from '.';
import { BASE_URL, FriendsService } from './friends.service';

fdescribe('FriendsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let friendsService: FriendsService;
  let friend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        FriendsService,
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    friendsService = TestBed.inject(FriendsService);

    friend = {
      id: 1,
      firstName: 'Michelle',
      lastName: 'Mulroy',
      gender: Gender.Female,
      fav: true
    };
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('#construction', () => {
    it('should be created', () => {
      expect(friendsService).toBeDefined();
    });
  });

  describe('#getFriends', () => {
    it('should get all friends', () => {
      const expectedFriends: Friend[] = [friend];

      friendsService.getFriends()
        .subscribe(data => {
          expect(data).toEqual(expectedFriends);
        });

      const req = httpTestingController.expectOne(`${BASE_URL}/friends`);

      expect(req.request.method).toEqual('GET');
      req.flush(expectedFriends);
    });

    it('should report errors', () => {
      const errorMsg = 'Deliberate 404';

      friendsService.getFriends()
        .subscribe(data => fail('should have reported the 404'),
          (error: HttpErrorResponse) => {
            expect(error.status).toEqual(404, 'status');
            expect(error.error).toEqual(errorMsg, 'message');
          });

      const req = httpTestingController.expectOne(`${BASE_URL}/friends`);
      req.flush(errorMsg, {
        status: 404,
        statusText: 'Not Found'
      });
    });
  });

  describe('#saveFriend', () => {
    it('should save a friend', () => {
      const updatedFriend: Friend = friend;

      friendsService.saveFriend(updatedFriend)
        .subscribe(data => {
          expect(data).toEqual(updatedFriend);
        });

      const req = httpTestingController.expectOne(`${BASE_URL}/friends/1`);
      expect(req.request.method).toEqual('PUT');
      req.flush(updatedFriend);
    });
  });

  describe('#addFriend', () => {
    it('should save a friend', () => {
      const newFriend: Friend = friend;

      friendsService.addFriend(newFriend)
        .subscribe(data => {
          expect(data).toEqual(newFriend);
        });

      const req = httpTestingController.expectOne(`${BASE_URL}/friends`);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(JSON.stringify(newFriend));
      req.flush(newFriend);
    });
  });
});
