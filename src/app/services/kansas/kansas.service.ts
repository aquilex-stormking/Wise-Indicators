import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Kansas } from '../../interfaces/interfaces2';

@Injectable({
  providedIn: 'root'
})
export class KansasService {


  private url = "https://api.weather.gov/gridpoints/LWX/31,80/forecast"

  constructor(private http: HttpClient) {  }
  
  public getData(): Observable<Kansas|undefined> {
    return this.http.get<any>(this.url).pipe(
      catchError((error) => {
        console.log(error)
        return of(undefined)
      } )
    );
  }
}
