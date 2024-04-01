import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { BackNavigationService } from './back-navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserCardComponent,HttpClientModule,CommonModule,FormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  logged = true
  constructor(private backwardNavigationConfirmation: BackNavigationService) {}

  @HostListener('window:popstate', ['$event'])
  onPopState(event: Event) {
    const confirmed = this.backwardNavigationConfirmation.confirmBackNavigation();
    if (!confirmed && this.logged) {
      history.forward();
      this.logged = false
      event.preventDefault()

    }
  }
}
