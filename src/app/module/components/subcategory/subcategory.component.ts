import { Component } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent {
product= [
  {
      id: 1,
      name: 'Subcategory 1',
  },
  {
    id: 2,
    name: 'Subcategory 2',
    },
    {
      id: 3,
      name: 'Subcategory 3',
      },

]
}
