import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-non-alcoholic',
  templateUrl: './non-alcoholic.component.html',
  styleUrls: ['./non-alcoholic.component.css']
})
export class NonAlcoholicComponent implements OnInit {

  nonAlcoholicDrinks: any[];
  loaded = false;
  drinkIds = [];
  fullDrinks = [];

  constructor(
    private recipeService: RecipeService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNonAlcoholicDrinks();
  }

  getNonAlcoholicDrinks() {
    this.recipeService.getNonAlcoholicDrinks().subscribe(drinks => {
      this.nonAlcoholicDrinks = drinks.drinks;
      this.loaded = true;
      console.log(this.nonAlcoholicDrinks);
      for (let i = 0; i < this.nonAlcoholicDrinks.length; i++ ) {
        this.drinkIds.push(this.nonAlcoholicDrinks[i].idDrink);
      }
      console.log(this.drinkIds);

      for (let i = 0; i < this.drinkIds.length; i++) {
        this.recipeService.getDrinkById(this.drinkIds[i]).subscribe(drink => {
          this.fullDrinks.push(drink.drinks[0]);
        });
      }

      console.log(this.fullDrinks);
    })
  }

  changePage(id) {
    this.router.navigate([`drink/${id}`]);
  }

  backClick(){
    this.location.back();
  }
}
