import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Coulumbia } from '../../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export  class CoulumbiaService {
  private url = "https://api.weather.gov/gridpoints/TOP/31,80/forecast"

  constructor(private http: HttpClient) {  }
  
  public getData(): Observable<Coulumbia|undefined> {
    
      return this.http.get<any>(this.url).pipe(
        catchError((error) => {
          console.log(error)
          return of(undefined)
        } )
      );
  }
}
