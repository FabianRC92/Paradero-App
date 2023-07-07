import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Paradero } from '../types/paradero.type';
import * as jsonData from '../../../assets/db/map.json';

import { Observable, map, catchError, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private readonly API = environment.urlAPI;
  private readonly mapKey = environment.mapboxAPIKey;
  private readonly coordinatesMap = environment.coordinatesMap;

  constructor(private http: HttpClient) {}

  /**
   * return the map key for mapbox component
   * @returns string with map key
   */
  public getMapKey(): string {
    return this.mapKey;
  }

  /**
   * return the coordinates for position map
   * @returns coordinates
   */
  public getCoordinatesMap(): number[] {
    return this.coordinatesMap;
  }

  /**
   * call api for get locations
   * @returns observable type Paradero[]
   */
  public getLocation(): Observable<Paradero[]> {
    return this.http.get<Paradero[]>(`${this.API}`).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }

  /**
   * handle the errors from httpclient
   * @param error object with error
   * @returns observable
   */
  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      const dataString = JSON.stringify(jsonData);
      return of(JSON.parse(dataString));
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
