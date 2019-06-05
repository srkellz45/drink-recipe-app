import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  loaded: boolean = false;
  drink: any = ''; 
  instructions: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
    ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getDrinkById(id).subscribe(drink => {
      this.drink = drink.drinks[0]
      this.instructions = this.drink.strInstructions.split(".");
      this.loaded = true;
      const recipe = this.drink

      Object.keys(recipe).forEach(function (item) {
        if (recipe[item] == '' || recipe[item] == ' ') {
          recipe[item] = null;
        }
      })

    console.log(this.drink)

    });
  }

  backClick() {
    this.location.back();
  }

}
