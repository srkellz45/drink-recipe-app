import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/Recipe';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class RecipeService {

  private searchQuerySource = new BehaviorSubject<string>("");
  currentQuery = this.searchQuerySource.asObservable();

  private searchResultsSource = new BehaviorSubject<any>([]);
  currentResults = this.searchResultsSource.asObservable();
  
  postUrl: string = 'https://www.thecocktaildb.com/api/json/v2/8673533/';

  constructor(private http: HttpClient) { }

  changeSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }

  changeSearchResults(results) {
    this.searchResultsSource.next(results);
  }

  searchByDrinkName(query: string): Observable<any> {
    const url = `${this.postUrl}/search.php?s=${query}`;
    return this.http.get<any>(url);
  }

  getPopular(): Observable<any> {
    const url = `${this.postUrl}/popular.php`;
    return this.http.get<any>(url);
  }

  getNewestDrinks(): Observable<any> {
    const url = `${this.postUrl}/recent.php`
    return this.http.get<any>(url);
  }

  getDrinkById(drinkId: number): Observable<any> {
    const url = `${this.postUrl}/lookup.php?i=${drinkId}`;
    return this.http.get<any>(url);
  }

  getDrinksByIngredient(ingredient: any): Observable<any> {
    const url = `${this.postUrl}/filter.php?i=${ingredient}`
    return this.http.get<any>(url);
  }

  getNonAlcoholicDrinks() {
    const url = `${this.postUrl}/filter.php?a=Non_Alcoholic`;
    return this.http.get<any>(url);
  }

  getRandomDrink(){
    const url = `${this.postUrl}/random.php`;
    return this.http.get<any>(url);
  }
}
