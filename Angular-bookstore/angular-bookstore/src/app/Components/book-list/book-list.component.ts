import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Modelclasses/book';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from 'src/app/Services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
   
  books:Book[] ;
  currentCategoryId:number;
  hasCategoryId:boolean;
  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
     this.activatedRoute.paramMap.subscribe(()=>{
         this.listBooks();
     }
     );
  }

  listBooks()
  {
    this.hasCategoryId =this.activatedRoute.snapshot.paramMap.has('id');
    if(this.hasCategoryId)
    {
   this.currentCategoryId=+this.activatedRoute.snapshot.paramMap.get('id');
    }
    else
    {
      this.currentCategoryId=3; 
    }



      this.bookService.getBooks(this.currentCategoryId).subscribe(
          data=>{this.books=data;
             
          }


      );
  }

}
