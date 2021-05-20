import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Modelclasses/book';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
   
  books:Book[] ;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
      this.listBooks();
  }

  listBooks()
  {
      this.bookService.getBooks().subscribe(
          data=>{this.books=data;
             
          }


      );
  }

}
