import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { CategoryResultsComponent } from './components/category-results/category-results.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'drink/:id', component: RecipePageComponent},
  {path: 'category/:ingredient', component: CategoryResultsComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRouterModule { }
