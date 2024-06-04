import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu/sidemenu.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  standalone: true,
  imports: [RouterModule,SidemenuComponent,MatCardModule],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
