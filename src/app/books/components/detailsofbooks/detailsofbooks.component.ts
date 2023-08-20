import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-detailsofbooks',
  templateUrl: './detailsofbooks.component.html',
  styleUrls: ['./detailsofbooks.component.css']
})
export class DetailsofbooksComponent implements OnInit {
  id: any
data:any ={}

  constructor(private route: ActivatedRoute, private service: BooksService) {

    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this?.id)
  
    
  }

  ngOnInit(): void {
    this.getBook();
   
  
  }

  getBook() {
    this.service.getBookById(this.id).subscribe(res => {
      this.data = res
    })
  }

}
