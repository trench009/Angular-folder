import { FormsModule,FormBuilder,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  formproduct:FormGroup |any;
  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
  }


  
}
