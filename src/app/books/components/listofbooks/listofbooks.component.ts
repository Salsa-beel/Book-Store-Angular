import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-listofbooks',
  templateUrl: './listofbooks.component.html',
  styleUrls: ['./listofbooks.component.css']
})
export class ListofbooksComponent {

  listofbooks:any[] = []

  constructor(private service:BooksService){

  }
  ngOnInit(){
 
    this.getlist()

}
getlist(){
this.service.getAllBooks().subscribe((data:any)=>{
  console.log(data)
}) 
 }
}
