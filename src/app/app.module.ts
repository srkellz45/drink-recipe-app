import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Browser } from 'protractor';
import { FormsModule } from '@angular/Forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeService } from './services/recipe.service';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { AppRouterModule } from './/app-router.module';
import { CategoryResultsComponent } from './components/category-results/category-results.component';
import { SpiritPageComponent } from './components/spirit-page/spirit-page.component';
import { NonAlcoholicComponent } from './components/non-alcoholic/non-alcoholic.component';
import { RandomComponent } from './components/random/random.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    RecipePageComponent,
    CategoryResultsComponent,
    SpiritPageComponent,
    NonAlcoholicComponent,
    RandomComponent,
    SearchResultsComponent  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule
  ],


  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
