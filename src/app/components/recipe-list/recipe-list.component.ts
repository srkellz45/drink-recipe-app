import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
    ingredient: '',
    ingredients: [],
    directions: []
  };
  @ViewChild('recipeForm') form: any;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {

    // this.recipeService.getRecipes().subscribe(recipes => {
    //   this.recipes = recipes;
    // });

      console.log(this.form);
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

  onSubmit(value: Recipe) {
    this.recipes.unshift(value);
    console.log(value);
    this.recipe = {
      title: '',
      ingredient: '',
      ingredients: [],
      directions: []
    };
  }


  addIngredient(ingredient: any) {
    if (this.recipe.ingredient == '' || this.recipe.ingredient == undefined ) {
      console.log('empty')
    } else {
      this.recipe.ingredients.push({ title: ingredient, checked: false });
    }
    this.recipe.ingredient = '';
  }

  addStep(direction: string) {
    if (this.recipe.direction == '' || this.recipe.direction == undefined ) {
      console.log('empty')
    } else {
      this.recipe.directions.push(direction)
    }
    this.recipe.direction = '';
  }

  editAddIngredient(ingredient: HTMLInputElement) {
    if (ingredient.value !== '') {
      this.selectedRecipe.ingredients.push({ title: ingredient.value, checked: false });
      ingredient.value = '';
    }
  }

  editAddStep(step: HTMLInputElement) {
    if (step.value !== '') {
      this.selectedRecipe.directions.push(step.value);
      step.value = '';
    }
  }

  trackByFn(index: any, item: any) {
    return index;
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

  validateForm() {
    let valid;
    if (this.recipe.directions.length === 0) {
      valid = false;
    } else if (this.recipe.directions.length === 0) {
      valid = false;
    } else if (this.recipe.title == '') {
      valid = false;
    } else {
      valid = true;
    }
    return valid;
  }

  logError(){
    console.log('form invalid');
  }

}
