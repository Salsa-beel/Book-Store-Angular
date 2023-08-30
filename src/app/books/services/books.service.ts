import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailsofbooksComponent } from '../components/detailsofbooks/detailsofbooks.component';
import { BooksModule } from '../books.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {


  baseapi = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getpagebooks(page: number) {

    return this.http.get('http://localhost:3000/' + '?page=' + page);
  }

  getAllBooks() {
    return this.http.get(this.baseapi + 'books');
  }

  //Fetch product by id
  getBookById(id: any) {
    return this.http.get(this.baseapi + 'books/' + id)
  }


}



