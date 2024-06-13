# NgrxFundamentals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## What I've learned with this project

- ngrx is based on Redux pattern
- a **store** is the place that we define all the states that will be available on the application
- components can't interact directly with the **store**. to do that, they must use the it to pick a **selector**
- a **selector** its a reference to a state and, when we pick one with a component, it will return a **observable**, so every time the state changes, a new value will be emitted
- we can change a state using **actions**: a signature that describes what will happen to the state when we call them. actions will be handled by a **reducer** function that will manipulate the state. the return type of this functions should match with the initial state type definition
