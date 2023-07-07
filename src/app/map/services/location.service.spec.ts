import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LocationService } from './location.service';

describe('Test on LocationService', () => {
  let locationService: LocationService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService],
    }).compileComponents();
    locationService = TestBed.inject(LocationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(locationService).toBeTruthy();
  });

  it('should call getLocation and return an Observable<any[]>', () => {
    locationService.getLocation().subscribe((location) => {
      expect(location.length).toBeLessThan(1);
    });
    const req = httpMock.expectOne(`${locationService.API}`);
    expect(req.request.method).toBe('GET');
  });

  it('should return string for getMapKey', () => {
    expect(locationService.getMapKey()).toBeInstanceOf(String)
  });

  it('should return array number for getMapKey', () => {
    expect(locationService.getCoordinatesMap()).toBeInstanceOf(Array<number>)
  });
});
