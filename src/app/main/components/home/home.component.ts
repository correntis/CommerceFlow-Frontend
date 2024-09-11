import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  productsJSON : string = "";

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    console.log("Getting products");
    this.productsService.getProducts().subscribe({
      next: (response) => {
        console.log("Products received", response);
        this.productsJSON = JSON.stringify(response);
      },
      error: (error) => {
        console.error("Failed to get products", error);
      }
    });
  }
}
