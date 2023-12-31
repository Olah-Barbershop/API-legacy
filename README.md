# The REST API used for the Oláh Barbershop [app](https://github.com/Olah-Barbershop/app) and [website](https://github.com/Olah-Barbershop/website)

## Made using [ExpressJS](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/)

(Side note: **All** info given by the API other than merch is **fake**.)

## Documentation
Check out the API documentation [here](DOCUMENTATION.md)

## Instructions
First, clone the repository
```sh
git clone https://github.com/olah-barbershop/api.git
cd api
```
Next, create a `.env` file and add your MongoDB database url like this
```sh
DATABASE_URL = #your database url
```
Generate a self-signed SSL certificate
```sh
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
Finally, install the dependencies and start the server
```sh
npm i
node server.js
```
**P.S.** If you get a punycode deprecation warning, just change the following line in `node_modules/tr46/index.js`
```js
// from this
const punycode = require("punycode");
// to this
const punycode = require("punycode/");
```
