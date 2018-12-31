import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test recipe', 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi7iZuU38TfAhUIwI8KHQ2QBVkQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fen%2Frecipe-comisa-healthy-tomato-2930786%2F&psig=AOvVaw1mMUgju2io6xXPf8hk_V58&ust=1546162728250059')
  ];

  constructor() { }

  ngOnInit() {
  }

}
