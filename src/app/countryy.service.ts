import { Injectable } from '@angular/core';
import { Flag } from './flag-data';
import { Country } from './country';
import { Language } from './country';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryyService {

  private countriesUrl = 'https://restcountries.eu/rest/v2/all';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getCountries(): Observable<Country[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<Country[]>(this.countriesUrl);
  }

}

