import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DetailsofbooksComponent } from '../components/detailsofbooks/detailsofbooks.component';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url = '/assets/books.json';
  constructor(private httpClient:HttpClient) {}

  getpagebooks(page:number){

    return this.httpClient.get('/assets/books.json'+'?page='+ page);
  }

  getAllBooks(){
    return this.httpClient.get('/assets/books.json');
  }


  getBookById(id:any){
    return this.httpClient.get(this.url+id);
  }
  

}
