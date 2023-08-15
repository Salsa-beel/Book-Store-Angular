import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksModule } from './books/books.module';
import { DetailsofbooksComponent } from './books/components/detailsofbooks/detailsofbooks.component';
import { ListofbooksComponent } from './books/components/listofbooks/listofbooks.component';

const routes: Routes = [
  {path:"books",component:ListofbooksComponent},
  {path:"details",component:DetailsofbooksComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
