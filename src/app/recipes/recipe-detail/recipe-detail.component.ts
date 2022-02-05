import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //Properties
  @Input() recipe: Recipe;

  constructor(private rsService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.rsService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
