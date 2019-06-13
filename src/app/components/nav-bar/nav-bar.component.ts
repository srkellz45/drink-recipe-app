import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  query: string = '';
  searchResults: any = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.currentQuery.subscribe(query => this.query = query);
    this.recipeService.currentResults.subscribe(result => this.searchResults = result);
  }

  searchByName(query){
    this.recipeService.searchByDrinkName(query).subscribe(drinks => {
      this.searchResults = drinks;
      this.recipeService.changeSearchResults(this.searchResults);
      this.recipeService.changeSearchQuery(this.query);
      this.query = '';
    });

    
  }

}
