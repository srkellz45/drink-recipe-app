import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-index-view',
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.css']
})
export class IndexViewComponent implements OnInit {
  @Input() selectRecipe;
  recipes: Recipe[];
  selectedRecipe: any;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });

    this.selectedRecipe = this.recipes[0];

  }



  listClick(recipe) {
    this.selectRecipe(recipe);
  }

  

}
