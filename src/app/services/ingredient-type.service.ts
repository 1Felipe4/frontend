import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngredientType } from '../models/ingredient-type.model';

const baseUrl = 'http://localhost:8000/api/types';

@Injectable({
  providedIn: 'root'
})
export class IngredientTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IngredientType[]> {
    return this.http.get<IngredientType[]>(baseUrl);
  }

  get(id: any): Observable<IngredientType> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<IngredientType[]> {
    return this.http.get<IngredientType[]>(`${baseUrl}?name=${name}`);
  }

}
