<h1 align="center">
 🎸 Instant Guitar Chord Positions Search, powered by Typesense - Angular
</h1>
<div align="center">
  <div><h3>Other versions</h3></div>
  <a href="https://github.com/typesense/showcase-guitar-chords-search-nuxt-js">NuxtJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-next-js">NextJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-angular">Angular 15</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-vanilla-js">Vanilla JS</a>
</div>

## Tech Stack

- <a href="https://github.com/typesense/typesense" target="_blank">Typesense</a>
- Angular 15
- Typescript
- Cypress

All make for a blazingly fast search experience 🔥🔥🔥

The guitar chord dataset & chord svg generation is from <a href="https://github.com/tombatossals/chords-db" target="_blank">tombatossals</a> which contains 2141 chord shapes of 552 chords.

## Repo structure

- `src/app` contains UI components
- `scripts/` contains file to index data from `scripts/data` into Typesense
- `writeEnvVariables.ts` util script to write env variables at build time

## Development

To run this project locally, make sure you have `@angular/cli` version 15, docker and nodejs.

```shell
npm install -g @angular/cli@v15-lts
```

Installation

```shell
git clone https://github.com/typesense/showcase-guitar-chords-search-angular.git

cd showcase-guitar-chords-search-angular

npm i
```

Start typesense server

```shell
npm run start:typesense # or: docker compose up
```

Index data into typesense

```shell
npm run index:typesense
```

Generate angular env variables

```shell
ng generate environments
```

Then add this to your `src/environments/environment.development.ts`

```typescript
// change them if you want to use Typesense cloud cluster
export const environment = {
  PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY: null,
  PUBLIC_TYPESENSE_HOST: null,
  PUBLIC_TYPESENSE_PORT: "443",
  PUBLIC_TYPESENSE_PROTOCOL: "https",
};
```

Start the dev web app

```shell
ng serve
```

Open http://localhost:4200/ to see the app ✌️

## Deployment

Set env variables to point the app to the Typesense Cluster

```env
PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY=xxx
PUBLIC_TYPESENSE_HOST=xxx.typesense.net
PUBLIC_TYPESENSE_PORT=443
PUBLIC_TYPESENSE_PROTOCOL=https
```

The file `writeEnvVariables.ts` will automatically load them into `src/environments` for the angular app.
