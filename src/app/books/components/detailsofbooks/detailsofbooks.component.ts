import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/entities/book.entity';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-detailsofbooks',
  templateUrl: './detailsofbooks.component.html',
  styleUrls: ['./detailsofbooks.component.css']
})
export class DetailsofbooksComponent implements OnInit {
  id!: any
  data: any = {}

  constructor(private route: ActivatedRoute, private service: BooksService) {

    
    // this.Book= new Book();
    // this.Book.id = 1;
    // this.Book.title = "Captain America";
    // this.Book.author= "Joe Simon and Jack Kirby ";
    // this.Book.publicationYear=1971;
    // this.Book.description = "Captain America, a comic-strip superhero created by writer Joe Simon and artist Jack Kirby for Timely (later Marvel) Comics, debuted in March 1941 in Captain America Comics no."
    // this.Book.thumbnailUrl= "https://cdn.marvel.com/u/prod/marvel/i/mg/3/a0/5991fa03329b7/clean.jpg"


    
  }

  ngOnInit(): void {
    this.getBook();
   
  
  }

  getBook() {
    this.service.getBookById(this.id).subscribe(res => {
      this.data = res
    })
  }

}
