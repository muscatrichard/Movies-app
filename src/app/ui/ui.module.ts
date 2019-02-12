import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DdMenuComponent } from './dd-menu/dd-menu.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    NavBarComponent,
    DdMenuComponent,
    SearchComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    DdMenuComponent,
    SearchComponent,
    ContentComponent
  ]
})
export class UIModule { }
