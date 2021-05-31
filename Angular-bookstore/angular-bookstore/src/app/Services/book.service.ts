import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Modelclasses/book';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="http://localhost:8080/api/v1/books"

  constructor(private httpClient:HttpClient) 
  {

   }

   getBooks(theCategoryId:number): Observable<Book[]>
   {
     const searchURL=`${this.baseUrl}/search/category?id=${theCategoryId}`;
      return this.httpClient.get<GetBooks>(searchURL).pipe(
        map(response => response._embedded.books)
      );
   }

}

interface GetBooks{
  _embedded:{
    books:Book[];
  }
}









