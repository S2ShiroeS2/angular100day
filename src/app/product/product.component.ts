import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/ProductService';
import { scoped, Lifecycle, container } from 'tsyringe'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
@scoped(Lifecycle.ResolutionScoped)
export class ProductComponent implements OnInit {
    productRandomId = Math.random();

    constructor(public cartService: CartService) {
    }

  ngOnInit(): void {
  }
}

function testContainer() {
    console.log(container.resolve(ProductComponent));
}

testContainer();


// function setUpTestContainer() {
//     container.register(CartService, {useClass: TestCartService});
// }

// setUpTestContainer();
