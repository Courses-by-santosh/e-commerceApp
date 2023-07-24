import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { inject } from '@angular/core';
import { CommonModule, AsyncPipe, JsonPipe } from '@angular/common';
import { CategoryService, getCategoriesActions, selectCategories, selectError } from '@org/category';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    MainNavComponent,
    AsyncPipe,
    JsonPipe,
  ],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'santosh-workspace';

  
  // categories= this.categoryService.getCategories();

  constructor(private readonly store: Store,) {}

  ngOnInit() {
    this.store.dispatch(getCategoriesActions());
  }
}
