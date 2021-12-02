import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { Plate } from '../models/plate.model';

const baseUrl = 'http://localhost:8000/api-views/ingredients';
const format = '/?format=json'

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}${format}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}${format}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${baseUrl}?search=${name}`);
  }

  getBalance(plate: Plate): string{
    let map = new Map<any, Ingredient>()
    plate.ingredients.forEach(ingredient => {
      map.set(ingredient.type, ingredient)
    });
    let type_amt = map.size
    if(type_amt < 1){
      return 'Empty'
    }
    else if(type_amt < 3){
      return 'Unbalanced'
    }
    else if(type_amt < 5){
      return 'Fairly Balanced'
    }
    else{
      return 'Fully Balanced'
    }    
  }


}
