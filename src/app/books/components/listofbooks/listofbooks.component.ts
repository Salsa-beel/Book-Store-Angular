import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-listofbooks',
  templateUrl: './listofbooks.component.html',
  styleUrls: ['./listofbooks.component.css']
})
export class ListofbooksComponent {

  books: any[] = []


  data: any;
  alldata: number = 0;
  pagination: number = 1;

  constructor(private service: BooksService) {  //dependency injection to import the service to the component

  }
  ngOnInit() {

    this.getlist(); 

    this.fetchbooks();
    console.log(this.fetchbooks());

  }
  getlist() {
    this.service.getAllBooks().subscribe((data: any) => {
      this.books = data

    })
  }

  fetchbooks() {
    this.service.getpagebooks(this.pagination).subscribe((res: any) => {
      this.data = res.data;
      this.alldata = res.total;
      console.log(res.total);
    });
  }
  renderPage(event: number) {
    this.pagination = event;
    this.fetchbooks();
  }
}
