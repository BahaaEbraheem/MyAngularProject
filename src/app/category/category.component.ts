import { Component, OnInit } from '@angular/core';
import { category } from 'src/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
cat:category=new category(0,'UnKnown');
  constructor() { 

  }
  Submit(){
    console.log(this.cat);
  }
  ngOnInit(): void {
  }

}
