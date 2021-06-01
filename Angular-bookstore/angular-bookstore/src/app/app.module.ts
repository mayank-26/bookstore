import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { BookService } from './Services/book.service';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { BookCategoryComponent } from './Components/book-category/book-category.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
