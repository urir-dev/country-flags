import { Component, OnInit, Input} from '@angular/core';
import { CountryyService } from '../countryy.service';
import { Country } from '../country';
import { Language } from '../country';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
@Component({
  selector: 'app-flags-tablee',
  templateUrl: './flags-tablee.component.html',
  styleUrls: ['./flags-tablee.component.scss']
})
export class FlagsTableeComponent implements OnInit {

  @Input() search: string;
  filteredCountries: Country[];
  countries: Country[];
  countriesResult: Country[];

  constructor(private countryService: CountryyService) { }

  ngOnInit(): void {
    this.getCountries();
  }


  getCountries(): void {
    this.countryService.getCountries()
        .subscribe(countries => {
          this.countries = countries;
          this.filteredCountries = countries;
        });
  }

  // getCountry(searchIn): void {
  //   this.countryService.getCountries()
  //       .subscribe(countries => this.countries.filter(t => t.name === searchIn));
  // }

  filter(v) {
    this.filteredCountries = this.countries.filter(coutry => coutry.name.indexOf(v) !== -1);
  }

}
