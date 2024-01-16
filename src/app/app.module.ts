import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAisModule } from 'angular-instantsearch';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { SearchAndFilterComponent } from './search-and-filter/search-and-filter.component';
import { InfiniteHitsComponent } from './infinite-hits/infinite-hits.component';

@NgModule({
  declarations: [AppComponent, HeadingComponent, SearchAndFilterComponent, InfiniteHitsComponent],
  imports: [NgAisModule.forRoot(), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
