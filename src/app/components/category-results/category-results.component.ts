import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-category-results',
  templateUrl: './category-results.component.html',
  styleUrls: ['./category-results.component.css']
})
export class CategoryResultsComponent implements OnInit {
  loaded: boolean = false;
  drinks: any;
  ids: any[] = [];
  drink: any;
  fullDrinks = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    const ingredient = this.route.snapshot.paramMap.get('ingredient');
    this.recipeService.getDrinksByIngredient(ingredient).subscribe(drinks => {
      this.drinks = drinks.drinks
      this.loaded = true;
      console.log(this.drinks);

      for(let i = 0; i < this.drinks.length; i++) {
        this.ids.push(this.drinks[i].idDrink);
      }

      for (let i = 0; i < this.ids.length; i++) {
        this.recipeService.getDrinkById(this.ids[i]).subscribe(drink => {
          this.fullDrinks.push(drink.drinks[0]);
        })
      }
      console.log(this.ids);
      console.log(this.fullDrinks);
    });

    
  }

  getDetails(id) {
    this.recipeService.getDrinkById(id).subscribe(drink => {
      this.drink = drink;
    });
  }

  changePage(id) {
    this.router.navigate([`drink/${id}`]);
  }

  backClick() {
    this.location.back();
  }

}
