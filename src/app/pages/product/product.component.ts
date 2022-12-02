import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
   this.deleteProduct();
  }
  getProducts() {
    this.httpClient.get('https://api.escuelajs.co/api/v1/products').subscribe(
      response => {
        console.log(response);
      }
    );
  }
  getProduct() {
    this.httpClient.get('https://api.escuelajs.co/api/v1/products/9').subscribe(
      response => {
        console.log(response);
      }
    );
  }
  createProduct() {
    const data = {
      title: 'esfero',
      price: 45,
      description: 'utiles escolares',
      categoryId: 1,
      images: ["https://api.lorem.space/image/watch?w=640&h=480&r=5922", "https://api.lorem.space/image/watch?w=640&h=480&r=3622"],
    }
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe(
      response => {
        console.log(response);
      }
    );
  }
  updateProduct() {
    const data = {
      title: 'zapatos',
      price: 60,
      description: 'calzado',
    }
    const url = 'https://api.escuelajs.co/api/v1/products/61';
    this.httpClient.put(url, data).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  deleteProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products/61';
    this.httpClient.delete(url).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
