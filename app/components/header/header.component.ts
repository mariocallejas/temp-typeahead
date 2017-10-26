import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData} from 'ng2-completer';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected typeaheadSelected: string;

  protected product: string;
  protected category: string;
  protected vendor: string;
  protected sku: string;

  protected products: CompleterData;
  protected categories: CompleterData;
  protected vendors: CompleterData;
  protected skus: CompleterData;

  protected productSearchData = [
    { name: 'Microsoft Azure', value: 'azure' },
    { name: 'Office 365', value: '365' },
    { name: 'Bitcoin', value: 'bitcoin' },
    { name: 'NPM', value: 'npm' },
    { name: 'Symantic', value: 'symantic' },
    { name: 'Bittitan', value: 'bittitan' },
    { name: 'Symantic Basic', value: 'symantic' },
  ];
  protected categorySearchData = [
    { name: 'Cloud', value: 'azure' },
    { name: 'Laptops', value: '365' },
  ];
  protected vendorSearchData = [
    { name: 'Microsoft', value: 'microsoft' },
    { name: 'Amazon', value: 'amazon' },
  ];
  protected skuSearchData = [
    { name: 'PO# 900454', value: '900454' },
    { name: 'PO# 544644', value: '544644' },
  ];
  constructor(private completerService: CompleterService) {
      this.products = completerService.local(this.productSearchData, 'name', 'name');
      this.categories = completerService.local(this.categorySearchData, 'name', 'name');
      this.vendors = completerService.local(this.vendorSearchData, 'name', 'name');
      this.skus = completerService.local(this.skuSearchData, 'name', 'name');
   }

  ngOnInit() {
  }
  updateInput(info: any) {
    console.log(info);
  }
  showCategoriesTypeahead() {
    this.typeaheadSelected = 'categories';
  }
  showProductsTypeahead() {
    this.typeaheadSelected = 'products';
  }

}
