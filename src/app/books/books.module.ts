import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofbooksComponent } from './components/listofbooks/listofbooks.component';
import { DetailsofbooksComponent } from './components/detailsofbooks/detailsofbooks.component';
import { BooksComponent } from './services/books/books.component';



@NgModule({
  declarations: [
    ListofbooksComponent,
    DetailsofbooksComponent,
    BooksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
