# E-Shop

This is an assessment project to showcase my skills in Angular, Node.js and MongoDB. It is build and design in angular framework as the client-side and node.js for the server-side. Click here to know more about [Angular](https://angular.io/) and [Node.js](https://nodejs.org/en/).

## Get Started

The back-end service is running using Express.js as framework and MongoDB as the database.

### Install Git

Git can be installed on the most common operating systems like Windows, Mac, and Linux. In fact, Git comes installed by default on most Mac and Linux machines! To install git to your local machine navigate to this [link](https://github.com/git-guides/install-git).

### Clone the Repo

```shell
git clone https://github.com/mrkdolormente/e-shop-api.git
cd e-shop-api
```

### Install Node.js

To publish and install packages to and from the public npm registry or a private npm registry, you must install Node.js and the npm command line interface using either a Node version manager or a Node installer. We strongly recommend using a Node version manager like nvm to install Node.js and npm. To install Node.js to your local machine kindly navigate to this [page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Install npm packages

To install npm packages run the command below to your terminal or cmd.

```shell
npm install
```

### Database

Since the application is using MongoDB as database, you need to install MongoDB in your local machine to run it locally. Download MongoDB Community Edition [here](https://www.mongodb.com/docs/v5.0/installation/).

### Initialize Database

To create the db, collection and dummy data for the application run the below command.

```shell
node ./database/commands/initialize.db.js
```

### Env

Rename the `.env.local` to `.env` and assign a value to the required properties

### Dummy Credentials

To login to the application, enter the dummy credentials. This credentials is included in creating dummy data for the database.

```shell
email: admin@gmail.com
password: admin
```

### Development server

Run `npm start` command to run the development server locally. After running the dev server, open [postman](https://www.postman.com/) and create a GET request to `http://localhost:3000/`. The application will automatically reload if you change any of the source files with the use of [nodemon](https://www.npmjs.com/package/nodemon).

## Dependencies

### bcrypt

[bcrypt](https://www.npmjs.com/package/bcrypt) is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher and presented at USENIX in 1999.

### Body Parser

[Body Parser](https://www.npmjs.com/package/body-parser) is a Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.

### CORS

[CORS](https://www.npmjs.com/package/cors) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Dotenv

[Dotenv](https://www.npmjs.com/package/dotenv) is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### Express

[Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### JSON Web Token

[JSON Web Token (JWT)](https://jwt.io/introduction) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

### MongoDB

[MongoDB](https://www.npmjs.com/package/mongodb) ia a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. To read more about MongoDB click [here](https://www.mongodb.com/).

## Git Convention

### Branch

- `feature/*` - for new feature, functionality and breaking changes
- `bug/*` - for bug fixes
- `release/*` - for production releases

### Additional Note

Always rebase the current branch to the main branch before pushing to the origin.
