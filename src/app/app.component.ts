import { Component,OnInit } from '@angular/core';
import* as books from '../assets/books.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyBookStore';
  data: any = books;
  author: any;

  ngOnInit() {
    console.log('Data', this.data);
  }
}
