import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailsofbooksComponent } from '../components/detailsofbooks/detailsofbooks.component';
import { Book } from 'src/app/entities/book.entity';
import { BooksModule } from '../books.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {


  baseapi = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getpagebooks(page: number) {

    return this.httpClient.get('http://localhost:3000/' + '?page=' + page);
  }

  getAllBooks() {
    return this.httpClient.get(this.baseapi + 'books');
  }

  //Fetch product by id
  getBookById(id: any) {
    return this.httpClient.get(this.baseapi + 'books/' + id)
  }


}



