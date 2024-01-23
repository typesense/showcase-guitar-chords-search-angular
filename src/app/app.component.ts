import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const adapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: environment.PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY || 'xyz',
    nodes: [
      {
        host: environment.PUBLIC_TYPESENSE_HOST || 'localhost',
        port: parseInt(environment.PUBLIC_TYPESENSE_PORT || '8108'),
        protocol: environment.PUBLIC_TYPESENSE_PROTOCOL || 'http',
      },
    ],
  },
  additionalSearchParameters: {
    query_by: 'key,suffix',
    num_typos: 0,
  },
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typesense-guitar-chords-angular15';
  config = {
    indexName: 'guitar-chords',
    searchClient: adapter.searchClient,
  };
}
