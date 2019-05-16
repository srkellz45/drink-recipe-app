import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  drinks: any[];
  ginDrinks: any[];
    
  constructor(private recipeService: RecipeService) { }

  async ngOnInit() {
    await this.getPopularDrinks();
    this.getGinDrinks();
  }

  getPopularDrinks() {
    this.recipeService.getPopular().subscribe(drinks => {
      this.drinks = drinks.drinks;
      console.log(drinks);
    });
  }


  getGinDrinks() {
    this.recipeService.getCocktailsByIngredient('gin').subscribe(ginDrinks => {
      this.ginDrinks = ginDrinks;
      console.log(ginDrinks);  
    });
  }


}
