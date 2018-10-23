import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-master',
  templateUrl: './recipe-master.component.html',
  styleUrls: ['./recipe-master.component.css']
})
export class RecipeMasterComponent implements OnInit {

  selectedRecipe: Recipe;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  onRecipeSelected(recipe) {
    this.selectedRecipe = recipe;
  }

}
