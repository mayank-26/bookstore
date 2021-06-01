import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookcategory } from 'src/app/Modelclasses/bookcategory';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
  //Array for all categories
 bookCategories:Bookcategory[];
  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listBookCategories();
  }

  listBookCategories()
  { this.bookService.getBookCategories().subscribe(
    data=>{
                     this.bookCategories=data;
    }
  )

  }

}
