import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    HeaderComponent // lazm a3mel exprot 3ashan ashof el component da bara el module.
  ]
   
})
export class SharedModule { }
