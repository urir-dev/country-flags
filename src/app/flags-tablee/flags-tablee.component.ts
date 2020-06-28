import { Component, OnInit, Input } from '@angular/core';
import { CountryyService } from '../countryy.service';
import { Country } from '../country';
import { Language } from '../country';


@Component({
  selector: 'app-flags-tablee',
  templateUrl: './flags-tablee.component.html',
  styleUrls: ['./flags-tablee.component.scss']
})
export class FlagsTableeComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryyService) { }

  ngOnInit(): void {
    this.getCountries();
  }


  getCountries(): void {
    this.countryService.getCountries()
        .subscribe(countries => this.countries = countries);
  }

}
