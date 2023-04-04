# Daily Trends

Daily Trends allows the user to access a REST API backend. This backend provides with options to edit the Feed base model. Moreover, the code has been adapted so that more models can be added without the need for a refactor. That is, indexes have been added in every folder, so that the code is more scalable and maintainable.

## Table of Contents

  - [Background](#background)
    - [Exercise Statement (![ES](https://icons.iconarchive.com/icons/wikipedia/flags/16/ES-Spain-Flag-icon.png))](#exercise-statement-es)
    - [Exercise Statement (![EN](https://icons.iconarchive.com/icons/wikipedia/flags/16/GB-United-Kingdom-Flag-icon.png))](#exercise-statement-en)
  - [Usage and Installation](#usage-and-installation)
  - [API/Component](#apicomponent)
  - [Stack](#stack)
    - [Architecture](#architecture)
  - [License](#license)


## Background

This repository is part of an exercise on Typescript Backend development. Find the statement of the exercise below.

### Exercise Statement (![ES](https://icons.iconarchive.com/icons/wikipedia/flags/16/ES-Spain-Flag-icon.png))
> Se pide realizar un API (DailyTrends) que exponga un feed de noticias. Este feed es un agregador de noticias de diferentes periódicos. DailyTrends es un periódico que une las portadas de los periódicos número uno.
>
> Cuando un usuario abre DailyTrends, se encuentra con las 5 noticias de portada de El País y El Mundo del día en el que lo abre, además se pueden añadir noticias a mano desde el API.

### Exercise Statement (![EN](https://icons.iconarchive.com/icons/wikipedia/flags/16/GB-United-Kingdom-Flag-icon.png))
> You are asked to create an API (DailyTrends) that exposes a news feed. This feed is an aggregator of news from different newspapers. DailyTrends is a newspaper that aggregates the front pages of the number one newspapers.
>
> When a user opens DailyTrends, it finds the 5 front page news of El País and El Mundo of the day he opens it, plus news can be added by hand from the API.


## Usage and Installation

To use this project, you must have installed [NodeJS](https://nodejs.org/es/) and must have a [MongoDB](https://www.mongodb.com/) database running. After that, you must clone this repository into your local machine. Then, you must install the dependencies with the following command:

```shell
    npm i --save
```

Then, you must create a .env file in the root folder of the project. This file must contain the following variables:

```js
    PORT=3000
    MONGO_URL=YOUR_MONGO_URL
```

To run the project, you must execute the following command:

```shell
    npm start
```

In case you want to build the project into a dist folder in JavaScript, you must execute the following command:

```shell
    npm run build
```

Finally, you can access the API documentation in the following link:

```shell
    http://localhost:3000/api-docs
```

## API/Component

The API for this exercise mainly includes the Feed model. The endpoints for this model are the following:

- GET /feed &rarr; Get all the feeds
- GET /feed/:url &rarr; Get a feed by id
- POST /feed &rarr; Create a new feed
- PUT /feed/:url &rarr; Update a feed
- DELETE /feed/:url &rarr; Delete a feed

To see the API documentation for more details, you can access Swagger through the following link in your browser:

```shell
    http://localhost:3000/api-docs
```

## Stack

- [NodeJS](https://nodejs.org/es/) : Node.js is a JavaScript / TypeScript runtime framework. In this project, it is used to create the backend.
- [Express](https://expressjs.com/es/) : Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [Typescript](https://www.typescriptlang.org/) : TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Mongoose](https://mongoosejs.com/) : Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- [Swagger](https://swagger.io/) : Swagger is a simple yet powerful representation of your RESTful API.

### Architecture

This project follows the MVC architecture. A simple diagram of the architecture is the following:

![MVC Architecture](https://ctrly.blog/wp-content/uploads/2022/01/nodejs-layered-architecture-diagram-1024x763.png)

Do keep in mind that frontend and backend are separated in this project. The frontend part was not developed.


The main folders to follow the MVC standards are the following:

- **Controllers**: This folder contains the controllers of the project. The controllers are the ones that manage the requests and responses of the API.
- **Models**: This folder contains the models of the project. The models are the ones that manage the data of the project.
- **Routes**: This folder contains the routes of the project. The routes are the ones that manage the endpoints of the project.
- **Services**: This folder contains the services of the project. The services are the ones that manage the business logic of the project and the communication with the database.
- **Utils**: This folder contains the utilities of the project such as extra information or functions that may be used in the project.

## License 

[MIT](https://opensource.org/licenses/MIT)
