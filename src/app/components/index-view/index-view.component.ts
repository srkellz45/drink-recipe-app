import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-index-view',
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.css']
})
export class IndexViewComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });

  }

  listClick(recipe) {
    this.recipeSelected.emit(recipe);
  }
}
