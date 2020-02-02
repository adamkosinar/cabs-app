import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Cab} from "./Cab";


@Injectable({
  providedIn: 'root'
})
export class CabService {

  private endpoint = 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
      private http: HttpClient) {

  }


  public getCabs(): Observable<Cab[]> {
    return this.http.get<Cab[]>(this.endpoint + 'cabs/');
  }

  public getCabsByLocation(location: string): Observable<Cab[]> {
    return this.http.get<Cab[]>(this.endpoint + 'cabs/' + location);
  }
}
