import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-listofbooks',
  templateUrl: './listofbooks.component.html',
  styleUrls: ['./listofbooks.component.css']
})
export class ListofbooksComponent {
  id!: "2";

  books: any[] = []
  data: any; // for pagination
  alldata: number = 0; // for pagination
  pagination: number = 1; // for pagination

  constructor(private service: BooksService) {  //dependency injection to import the service to the component

  }
 ngOnInit() {

    this.getlist();  // for view of the books

    this.fetchbooks(); // for pagination
    console.log(this.fetchbooks()); // for pagination


  }
  getlist() {
    this.service.getAllBooks().subscribe((data: any) => {
      this.books = data

    })
  }

  //  =======Pagination========

  
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
