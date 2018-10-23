import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-master',
  templateUrl: './recipe-master.component.html',
  styleUrls: ['./recipe-master.component.css']
})
export class RecipeMasterComponent implements OnInit {

  selectedRecipe: any;
  

  constructor() { }

  ngOnInit() {
  }

  setSelectedRecipe(recipe){
    this.selectedRecipe = recipe;
    console.log("test");
  }

}
