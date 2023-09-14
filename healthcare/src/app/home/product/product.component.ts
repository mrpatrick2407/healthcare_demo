import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  medicines: any[] = [];
  constructor(private service: ProductService) {
    service.retrieve().subscribe((res: any) => {
      this.filteredmedicines = res;
      this.medicines = res;
    });
  }
  filteredmedicines: any[] = this.medicines;
  search: string = '';
  category: any = 'All';
  prescription: boolean = false;
  counter: boolean = false;

  filter() {
    console.log(this.medicines);
    this.filteredmedicines = this.medicines;
    this.filteredmedicines = this.filteredmedicines.filter((item) => {
      if (
        (this.prescription &&
          item.description.toLowerCase().includes('prescription')) || // Include items with prescription if 'prescription' is false
        (this.counter && item.description.toLowerCase().includes('counter')) || // Include items without prescription if 'counter' is false
        item.category.toString() == this.category // Include items with the selected category
      )
        return item;
    });
    if (this.filteredmedicines.length == 0) {
      this.filteredmedicines = this.medicines;
    }
  }
}
