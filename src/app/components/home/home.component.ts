import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  drinks: any[];
  ginDrinks: any[];
  newestDrinks: any[];
  chosenDrink: any = 'test';
  loaded: boolean = false;
    
  constructor(private recipeService: RecipeService) { }

  async ngOnInit() {
    await this.getPopularDrinks();
    this.getGinDrinks();
    console.log(this.chosenDrink);
    this.getNewestDrinks();
  }

  getPopularDrinks() {
    this.recipeService.getPopular().subscribe(drinks => {
      this.drinks = drinks.drinks;
      this.loaded = true;
    });
  }

  getNewestDrinks() {
    this.recipeService.getNewestDrinks().subscribe(drinks => {
      this.newestDrinks = drinks.drinks;
      console.log(drinks);
      this.loaded = true;
    })
  }

  getGinDrinks() {
    this.recipeService.getDrinksByIngredient('gin').subscribe(ginDrinks => {
      this.ginDrinks = ginDrinks;
      console.log(ginDrinks);  
    });
  }

  chooseDrink(drinkId) {
    console.log(drinkId);
    this.recipeService.getDrinkById(drinkId).subscribe(drink => {
      this.chosenDrink = drink.drinks[0];
    });
    console.log(this.chosenDrink);
  }

  
}
