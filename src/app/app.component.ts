import { Component,OnInit } from '@angular/core';
import* as books from '../assets/books.json';
import { BooksService } from './books/services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyBookStore';

  author: any;
  

 

  ngOnInit() {
 
  }

 

}
