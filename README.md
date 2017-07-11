# FriendsHq

This is an Angular workshop using TypeScript. 
It attempts to demonstrate creating a simple web application.

The constructs that we see being employed in this workshop are

- Creating Angular components
- Creating component hierarchies
- Using the Angular style guide for naming and project layout
- `@Input`s and `@Output`s
- Services
- Dependency Injection
- Ajax using `Http` and `Observables`
- Smart vs. Dumb components
- Routes, routing, and the `router-outlet`

## Prerequisites

- Download and install `node` (`v7.6.0` or greater) per [this](https://nodejs.org/en/download/)
  - This will install `npm` as well
- Angular Cli - You will find instructions [here](https://github.com/angular/angular-cli#prerequisites)

### Optional (but highly recommended)

- Install [Git](https://git-scm.com/downloads)
- Install [Visual Studio Code](https://code.visualstudio.com/)
  - Install the [EditorConfig extension](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - Install the [Angular v4 TypeScript Snippets extension](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2) by John Papa
- Install [Google Chrome](https://www.google.com/chrome/index.html)
  - Install the [Augury Extension](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd?hl=en)

## Getting started

First `git-clone` or [download]() this repository (Though it's preferred you clone)

Then open a terminal, `cd` to the directory where you cloned this repository.

**Make sure `node`/`npm` are in your path!**

```
npm install
```

## Testing the installation

Open **two** terminals.
In both `cd` to the directory where you cloned this repository.

**In the first one, run**

```
npm run server
```

You should see something to the effect of

```
> friends-hq@0.0.0 server /Users/raju/Documents/presentations/Angular-with-TypeScript-Workshop/friendsHq
> json-server --watch server/api/db.json


  \{^_^}/ hi!

  Loading server/api/db.json
  Done

  Resources
  http://localhost:3000/friends

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

**In the second terminal run**

```
ng serve
```

Once the console is settled, visit [http://localhost:4200/](http://localhost:4200/) and you should see a `http://localhost:4200/` with followed by the Angular Logo.

You are all set!

## Credits

This project is inspired by [Monica](https://github.com/monicahq/monica).
