import { Component } from '@angular/core';
import { StoreModule } from '../store/store.module';

@Component({
  selector: 'app',
  standalone: true,
  imports: [StoreModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReservationSystem';
}

