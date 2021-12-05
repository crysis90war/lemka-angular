import { Component, OnInit } from '@angular/core';
import { IAdresseForm } from 'src/app/models/forms/iadresse-form';

@Component({
  selector: 'app-adresse-add-or-update',
  templateUrl: './adresse-add-or-update.component.html',
  styleUrls: ['./adresse-add-or-update.component.scss'],
})
export class AdresseAddOrUpdateComponent implements OnInit {
  public adresse!: IAdresseForm;
  public countries!: any[];
  public filteredCountries!: any[];

  constructor() {}

  ngOnInit(): void {}

  // public searchCountry(event: { query: any; }): void {
  //   //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
  //   let filtered: any[] = [];
  //   let query = event.query;
  //   for (let i = 0; i < this.countries.length; i++) {
  //     let country = this.countries[i];
  //     if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
  //       filtered.push(country);
  //     }
  //   }

  //   this.filteredCountries = filtered;
  // }
}
