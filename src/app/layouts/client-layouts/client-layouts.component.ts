import { Component } from '@angular/core';
import {HeaderClientComponent} from "../../components/ClientComponent/header-client/header-client.component";
import {FooterClientComponent} from "../../components/ClientComponent/footer-client/footer-client.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-client-layouts',
  imports: [HeaderClientComponent,FooterClientComponent,RouterModule],
  templateUrl: './client-layouts.component.html',
  styleUrl: './client-layouts.component.scss'
})
export class ClientLayoutsComponent {

}
