import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { Browser } from 'protractor';
import { FormsModule } from '@angular/Forms';
import { IndexViewComponent } from './components/index-view/index-view.component';
import { RecipeMasterComponent } from './components/recipe-master/recipe-master.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    IndexViewComponent,
    RecipeMasterComponent  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
