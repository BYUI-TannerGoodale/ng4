import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', "This is a test",
        'http://foodjaunts.com/wp-content/uploads/2012/04/Spring-Shrimp-Salad-Overview-e1335228914177.jpg', [
            new Ingredient('Shrimp', 1),
            new Ingredient('Olive Oil', 2)
        ]),
        new Recipe('Another Test Recipe', "This is also a test",
        'http://foodjaunts.com/wp-content/uploads/2012/04/Spring-Shrimp-Salad-Overview-e1335228914177.jpg', [
            new Ingredient('Fat', 2000),
            new Ingredient('Saddness', 2)
        ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
