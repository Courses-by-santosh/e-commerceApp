import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCategories } from '@org/category';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'ecom-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterOutlet,
    MatMenuModule,
  ],
})
export class MainNavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  categories$ = this.store.select(selectCategories);

  constructor(private readonly store: Store) {}
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
