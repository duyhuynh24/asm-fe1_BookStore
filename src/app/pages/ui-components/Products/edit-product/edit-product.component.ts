import { Component, } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-edit-product',
  imports: [ MatTableModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {

}
