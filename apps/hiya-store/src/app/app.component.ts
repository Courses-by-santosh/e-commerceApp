import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HiyaStoreProductComponent } from '@org/hiya-store/product';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, HiyaStoreProductComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hiya-store';
}
