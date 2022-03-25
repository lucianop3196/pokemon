<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Pokemon app

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>

## Description

Single page application (SPA) to prove the use of differents technologies.
In this app, pokemons are shown with some of their characteristics.
The SPA consumes data from an external API [PokeApi](https://pokeapi.co/) through a backend developed in NodeJs using Express, adding new features to the original api

Moreover, pokemons could be created, with any specification wanted, and stored in database.

Features:

- Search pokemon
- Create a personalized pokemon
- Filter pokemons by source (API or database)
- Filter by type of pokemon
- Sort pokemons by strength
- Sort pokemons alphabetically
- Show details of each pokemon
- Refresh the pokemon's list
- Navigate through different pages
- Delete pokemons from database

## Technologies used and documentation

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [NodeJs](https://nodejs.org/dist/latest-v16.x/docs/api/)
- [Express](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/docs/current/) - [Sequelize](https://sequelize.org/v6/)

## Pre - requirements

It is necessary to have at least the latest stable version of Node and NPM. Make sure you have it to be able to correctly install the necessary dependencies to run the project.

Required versions are:

- **Node**: 12.18.3 or greater
- **NPM**: 6.14.16 or greater

To check which version you have installed:

> node -v
>
> npm -v

## Instructions to start the development server

1. Clone the repository
2. Create a database in postgres called pokemon
3. There are two folders: api and client. In these folders will be the back-end and front-end code respectively.
4. Create a file in api called .env that has the following structure:

```
DB_USER=postgresUser
DB_PASSWORD=postgresPassword
DB_HOST=localhost
```

Replace userPostgres and postgresPassword with your own credentials to connect to postgres.

5. Run the following commands on the /api and /client folders

```
npm install

npm start
```

6. Finally open http://localhost:3000

## Dependencies installed:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Front-end dependencies`

### `react-router-dom:`

This library was installed to facilitate component's rendering. Installed version 6.2.1.

### `redux:`

Redux centralize the application's state and logic enables powerful capabilities like undo/redo, state persistence. Version 4.1.2

### `react-redux:`

Provides APIs that enable components to interact with the Redux store. Version 7.2.7

### `redux-thunk:`

Thunk middleware allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods. Version 2.4.1

### `sweetalert2:`

A responsive and customizable replacement for javascript's popup boxes. Version 11.4.0

### `Back-end dependencies`

### `axios:`

Promise based HTTP client for the browser and node.js. Version 0.25.0

### `body-parser:`

Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property. Version 1.19.0

### `cookie-parser:`

Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Version 1.4.5

### `cors:`

Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. Version 2.8.5

### `dotenv:`

Loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on [The Twelve-Factor App](https://12factor.net/config) methodology. Version 8.2.0

### `express:`

Back-end web application framework for Node.js. It is designed for building web applications and APIs. Version 4.17.1

### `morgan:`

HTTP request logger middleware for node.js. Version 1.10.0

### `pg:`

Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings. Version 8.5.1

### `Sequelize:`

Promise-based Node.js ORM tool for Postgres. It features solid transaction support, relations, eager and lazy loading, read replication and more. Version 6.3.5

## Deployment

The app has the backend and database deployed on Heroku and the frontend on Vercel.

[Link](https://pennacchioni-pi.vercel.app/) to visit the app

<img src="./client/public/readmeImage.png"/>

Thanks for your time! I hope you enjoy my project.

### `Contact:`

[Linkedin](https://www.linkedin.com/in/luciano-pennacchioni/), [github](https://github.com/lucianop3196)
