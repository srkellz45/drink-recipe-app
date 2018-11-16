import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() selectedRecipe: any;
  recipes: Recipe[];
  status = false;
  selectedIngredient: any;
  checked = false;
  newTitle = '';
  recipe: Recipe = {
    title: '',
    ingredients: [],
    directions: []
  };

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });


  }

  addRecipe() {
    this.recipes.push(this.recipe);
    this.recipe = {
      title: '',
      ingredients: [],
      directions: []
    };

  }

  clearRecipe() {
    this.recipe = {
      title: '',
      ingredients: [],
      directions: []
    }
  }

  onSubmit(e) {
    e.preventDefault();
  }

  addIngredient(ingredient: HTMLInputElement) {
    if (ingredient.value !== '') {
      this.recipe.ingredients.push({title: ingredient.value, checked: false});
      console.log(ingredient.value);
      ingredient.value = '';
    }
  }

  addStep(step: HTMLInputElement) {
    if (step.value !== '') {
      let length = this.recipe.directions.length;
      let obj = {};
      obj[length] = step.value;
      this.recipe.directions.push(obj);
      length++;
      step.value = '';
      obj = {};
      console.log(this.recipe.directions );
    }
  }

  editAddIngredient(ingredient: HTMLInputElement) {
    if (ingredient.value !== '') {
      this.selectedRecipe.ingredients.push({title: ingredient.value, checked: false});
      ingredient.value = '';
    }
  }

  editAddStep(step: HTMLInputElement) {
    if (step.value !== '') {
      this.selectedRecipe.directions.push(step.value);
      step.value = '';
    }
  }

  deleteRecipe(recipe) {
    if (confirm(`Are you sure you want to delete "${recipe.title}" from the recipe box?`)) {
      if (this.recipes.length > 1) {
        const i = this.recipes.indexOf(recipe);
        this.recipes.splice(i, 1);
        this.selectedRecipe = this.recipes[0];
      }
    }
  }

  deleteStep(step) {
     const i = this.selectedRecipe.directions.indexOf(step);
     this.selectedRecipe.directions.splice(i, 1);
  }

  deleteIngredient(ingredient) {
    const i = this.selectedRecipe.ingredients.indexOf(ingredient);
    this.selectedRecipe.ingredients.splice(i, 1);
 }
 
}
