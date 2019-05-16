import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/Recipe';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class RecipeService {
  recipes: Recipe[];
  postUrl: string = 'https://www.thecocktaildb.com/api/json/';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<any> {
    const url = `${this.postUrl}/v2/8673533/popular.php`;
    return this.http.get<any>(url);
  }

  getCocktailsByIngredient(ingredient: string): Observable<any> {
    const url = `${this.postUrl}/v2/8673533/filter.php?i=${ingredient}`;
    return this.http.get<any>(url);
  }
}
