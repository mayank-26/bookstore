import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Modelclasses/book';

import {map} from 'rxjs/operators';
import { Bookcategory } from '../Modelclasses/bookcategory';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="http://localhost:8080/api/v1"

  constructor(private httpClient:HttpClient) 
  {

   }
    //get books by category
   getBooks(theCategoryId:number): Observable<Book[]>
   {
     
      return this.httpClient.get<GetResponseBooks>(this.baseUrl+`/books/search/category?id=${theCategoryId}`).pipe(
        map(response => response._embedded.books)
      );
   }

   getBookCategories(): Observable<Bookcategory[]>
   {
    
      return this.httpClient.get<GetResponseBooksCategory>(this.baseUrl+`/book-category`).pipe(
        map(response => response._embedded.bookcategory)
      );
   }




}
//interface for json response for getBooks method
interface GetResponseBooks{
  _embedded:{
    books:Book[];
  }
}
interface GetResponseBooksCategory{
  _embedded:{
    bookcategory:Bookcategory[];
  }
}










