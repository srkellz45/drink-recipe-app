import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      {
        title: "Tomato Basil Soup",
        ingredients: [{title: '4 tomatoes - peeled, seeded and diced', checked: false}, {title: '4 cups tomato juice', checked: false}, {title: '14 leaves fresh basil', checked: false}, {title: '1 cup heavy whipping cream', checked: false}, {title: '1/2 cup butter', checked: false}, {title: 'salt and pepper to taste', checked: false}],
        directions: [{0: 'Place tomatoes and juice in a stock pot over medium heat. Simmer for 30 minutes. Puree the tomato mixture along with the basil leaves, and return the puree to the stock pot.'}, { 1: 'Place the pot over medium heat, and stir in the heavy cream and butter. Season with salt and pepper. Heat, stirring until the butter is melted. Do not boil.'}]
      },
      {
        title: "Spicy Avocado Snack",
        ingredients: [{title: '1 cup ripe avocado, halved and pitted', checked: false}, {title: '1/2 lemon, juiced', checked: false}, {title: '2 tablespoons hot sauce ', checked: false}, {title: '2 pinches kosher salt', checked: false}],
        directions: [{0: 'Slice the meat of each avocado half 3 or 4 times in one direction, turn avocado and slice 3 or 4 more slices perpendicular to the first slices creating 8 to 12 small cubes still attached to the peel.'}, {1: 'Drizzle lemon juice over each avocado and top with kosher salt. Drizzle hot sauce over each. Eat with a fork or spoon.'}]
      },
      {
        title: "Fried Chicken Wings",
        ingredients: [{title: '12 small chicken wings', checked: false}, {title: '1/4 teaspoon seasoned salt, or to taste', checked: false}, {title: '1 cup all-purpose flour', checked: false}, {title: '1 teaspoon coarse salt', checked: false}, {title: '1/2 teaspoon ground black pepper', checked: false}, {title: '1/4 teaspoon cayenne pepper', checked: false}, {title: '1/4 teaspoon paprika', checked: false}, {title: '1 (12 fluid ounce) bottle Buffalo wing sauce', checked: false}, {title: '2 quarts vegetable oil for frying', checked: false}],
        directions: [{0: 'Season chicken wings lightly with seasoned salt.'}, {1: 'Mix flour, salt, black pepper, cayenne pepper, and paprika together in a wide, shallow bowl. Press wings into flour mixture to coat and arrange onto a large plate so they do not touch. Refrigerate coated wings for 15 to 30 minutes.'}, {2: 'Dredge wings again in flour mixture and return to the plate. Refrigerate wings again 15 to 30 minutes.'},{3: 'Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).'}, {4: 'Fry chicken wings in hot oil until crisp and no longer pink at the bone and the juices run clear, 9 to 12 minutes. An instant-read thermometer inserted into the thickest part of the meat, near the bone should read 165 degrees F (74 degrees C).'}, {5: 'Transfer fried wings to a large stainless steel bowl. Drizzle sauce over the wings and toss to coat.'}]
      },
      {
        title: "Baked Kale Chips",
        ingredients: [{title: '1 bunch kale', checked: false}, {title: '1 tablespoon olive oil', checked: false}, {title: '1 teaspoon seasoned salt', checked: false}],
        directions: [{0: 'Preheat an oven to 350 degrees F (175 degrees C). Line a non insulated cookie sheet with parchment paper.'}, {1: 'With a knife or kitchen shears carefully remove the leaves from the thick stems and tear into bite size pieces. Wash and thoroughly dry kale with a salad spinner. Drizzle kale with olive oil and sprinkle with seasoning salt.'}, {2: 'Bake until the edges brown but are not burnt, 10 to 15 minutes.'}]
      }
    ];
   }

   getRecipes(): Observable<Recipe[]> {
     return of(this.recipes);
   }

}
