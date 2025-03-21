import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Thêm dòng này
import { FormsModule } from '@angular/forms'; // 🛠️ Import FormsModule



@Component({
  selector: 'app-add-user',
  imports: [RouterModule, FormsModule],// Thêm dòng này để hỗ trợ [routerLink]
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {


}
