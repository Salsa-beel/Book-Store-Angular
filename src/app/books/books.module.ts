import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofbooksComponent } from './components/listofbooks/listofbooks.component';
import { DetailsofbooksComponent } from './components/detailsofbooks/detailsofbooks.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { BreakingNewsComponent } from '../breaking-news/breaking-news.component';
import { LocationComponent } from '../location/location.component';
import { AboutUsComponent } from '../about-us/about-us.component';




@NgModule({
  declarations: [
    ListofbooksComponent,
    DetailsofbooksComponent,
    BreakingNewsComponent,
    LocationComponent,
    AboutUsComponent,
  
  ],

  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
  ]
})
export class BooksModule { }
