import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BooksModule } from './books/books.module';
import { DetailsofbooksComponent } from './books/components/detailsofbooks/detailsofbooks.component';
import { ListofbooksComponent } from './books/components/listofbooks/listofbooks.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path:"books",component:ListofbooksComponent},
  {path:"details/:id",component:DetailsofbooksComponent},
  {path:"breakingNews",component:BreakingNewsComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"location",component:LocationComponent},
  {path:"**",redirectTo:"breakingNews",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
