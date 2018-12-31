import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test recipe', 'https://realfood.tesco.com/recipes/parsnip-and-potato-gratin.html')
  ];

  constructor() { }

  ngOnInit() {
  }

}
