import { Component, OnInit } from '@angular/core';
import { countries } from "./country.data";
import { categories} from "./category.data";

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {

  countryList = countries;
  categoryList = categories;

  selectedCountry = "ph";
  selectedCategory = "";


  constructor() {}

  ngOnInit(): void {
  }

}
