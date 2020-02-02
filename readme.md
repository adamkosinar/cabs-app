Hello!

The solution is divided into two parts - the backend and the frontend both in their dedicated folders that should be treated as separate projects

## The backend

The backend is a simple rest API served using restify.js
The app is held together using a dependency injection container Inversify.js,
It is not ideal but the best open source solution I could find so far.

just change to the backend directory and use npm scripts to run the service

`npm run server ` to run well, the server

`npm run test` to run all unit tests

## The Frontend
I have chosen Angular for this solution as it is way closer to how I approach problems and how I design
software in general as I am big fan of dependency injection and SOLID principles

You will need the  [Angular CLI](https://angular.io/guide/setup-local) to run the solution  

Then simply run:

`ng serve --open` to see the app in action

`ng test` to run tests

Obviously you will need the backend service to be running as well.