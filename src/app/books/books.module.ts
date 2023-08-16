import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofbooksComponent } from './components/listofbooks/listofbooks.component';
import { DetailsofbooksComponent } from './components/detailsofbooks/detailsofbooks.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListofbooksComponent,
    DetailsofbooksComponent,

    
    
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
  ]
})
export class BooksModule { }
