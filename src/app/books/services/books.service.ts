import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient:HttpClient) {}

  getpagebooks(page:number){

    return this.httpClient.get('/assets/books.json'+'?page='+ page);
  }

  getAllBooks(){
    return this.httpClient.get('/assets/books.json');
  }


}
