import { Component, OnDestroy } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs/index';
import * as fromMovies from './movies/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
loading: Subscription;
searchLoading: Subscription;
filterLoading: Subscription;


  constructor(private loadingBar: LoadingBarService, private store: Store<fromMovies.State>) {
    this.loading = store.pipe(select(fromMovies.getLoading)).subscribe(loading => this.manageLoader(loading));
    this.searchLoading = store.pipe(select(fromMovies.getSearchLoading)).subscribe(loading => this.manageLoader(loading));
    this.filterLoading = store.pipe(select(fromMovies.getFilterLoading)).subscribe(loading => this.manageLoader(loading));
  }

  manageLoader(isLoading: boolean) {
    if (isLoading) {
      this.loadingBar.start();
    } else {
      this.loadingBar.stop();
    }
  }

  ngOnDestroy() {
    this.loading.unsubscribe();
    this.searchLoading.unsubscribe();
    this.filterLoading.unsubscribe();
  }
}

