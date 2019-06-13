import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResults: any = [];
  loaded = false;
  noResults: boolean = false;
  query: string;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.recipeService.currentQuery.subscribe(query => this.query = query);
    this.recipeService.currentResults.subscribe(result => {
      if(result.drinks === null) {
        this.noResults = true;
      } else {
        this.searchResults = result.drinks;
        this.noResults = false;
        this.loaded = true;
      }
      
      console.log(this.searchResults);
      
    });
    
  }

  changePage(id) {
    this.router.navigate([`drink/${id}`]);
  }

  backClick() {
    this.location.back();
  }


  
}
