import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofbooksComponent } from './components/listofbooks/listofbooks.component';
import { DetailsofbooksComponent } from './components/detailsofbooks/detailsofbooks.component';




@NgModule({
  declarations: [
    ListofbooksComponent,
    DetailsofbooksComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
