import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
articles
  constructor(private productservice :ProductService) {
    this.productservice.getnews().subscribe((data)=>{
      console.log(data.data.articles)
      this.articles = data.data.articles
      //this.prod = data.data
  })
   }

  ngOnInit(): void {
  }

}
