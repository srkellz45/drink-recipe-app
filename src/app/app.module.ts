import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { Browser } from 'protractor';
import { FormsModule } from '@angular/Forms';
import { IndexViewComponent } from './components/index-view/index-view.component';
import { RecipeMasterComponent } from './components/recipe-master/recipe-master.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeService } from './services/recipe.service';
import { DrinkPageComponent } from './components/drink-page/drink-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    IndexViewComponent,
    RecipeMasterComponent,
    NavBarComponent,
    HomeComponent,
    DrinkPageComponent  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],


  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
