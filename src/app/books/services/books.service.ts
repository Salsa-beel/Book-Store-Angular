import { Injectable, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DetailsofbooksComponent } from '../components/detailsofbooks/detailsofbooks.component';
import { Book } from 'src/app/entities/book.entity';
import { BooksModule } from '../books.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books!: Book[];
  book!: Book;
  
  baseurl = '/assets/books.json';
  http: any;

  constructor(private httpClient: HttpClient) { }

  getpagebooks(page: number) {

    return this.httpClient.get('/assets/books.json' + '?page=' + page);
  }

  getAllBooks() {
    return this.httpClient.get(this.baseurl);
  }

 //Fetch product by id
 getBookById(id: number): Observable<Book> {
  return this.httpClient.get<Book>(this.baseurl + "/" + id)

  // getBookById(id: any) {
  //   return this.http.get(this.url)
  //   .pipe(map(res:any) => {
  //     return Response.json.find((item: { id: any; })=>(item.id == id))
  // })

// getBookById(id: number): Observable<> {
//   // const url = `${this.url}/${id}`;
//   return this.getAllBooks().map()
// }

}



}