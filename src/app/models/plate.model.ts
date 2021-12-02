import { Ingredient } from "./ingredient.model";

export class Plate {
    pk?: number;
    ingredients: Array<Ingredient> = []; 
}
