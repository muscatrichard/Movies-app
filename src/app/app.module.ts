import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { UIModule } from './ui/ui.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/index';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  imports: [
    LoadingBarModule,
    HttpClientModule,
    BrowserModule,
    MoviesModule,
    UIModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    StoreDevtoolsModule.instrument({
      name: 'Movies Store DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([])
  ],
  exports: [NotFoundPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
