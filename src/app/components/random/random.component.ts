import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  drink: any;
  loaded = false;

  constructor(
    private recipeService: RecipeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRandomDrink();
  }

  getRandomDrink(){
    this.recipeService.getRandomDrink().subscribe(drink => {
      this.drink = drink.drinks[0];
      const cocktail = this.drink;
      Object.keys(cocktail).forEach(function (item) {
        if (cocktail[item] == '' || cocktail[item] == ' ') {
          cocktail[item] = null;
        }
      })
      this.loaded = true;
      console.log(this.drink);
    })
  }

  backClick() {
    this.location.back();
  }

  refreshPage() {
    location.reload();
  }
}
