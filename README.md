# The REST API used for the Oláh Barbershop [app](https://github.com/Olah-Barbershop/app) and [website](https://github.com/Olah-Barbershop/website)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/Olah-Barbershop/API/express)](https://www.npmjs.com/package/express)
[![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/Olah-Barbershop/API/mongoose)](https://www.npmjs.com/package/mongoose)

## Documentation
Check out the API documentation [here](DOCUMENTATION.md)

## Instructions
First, clone the repository
```sh
git clone https://github.com/Olah-Barbershop/API.git
cd API
```
Next, create a `.env` file and add your MongoDB database url like this
```env
DATABASE_URL=[your database url]
```
Create a `server.cert` file and add your SSL server certificate, while adding your private key to `server.key`

**OR**

Generate a self-signed SSL certificate (for testing purposes only)
```sh
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
Finally, install the dependencies and start the server
```sh
npm install
node server.js
```
**P.S.** If you get a punycode deprecation warning, just change the following line in `node_modules/tr46/index.js`
```js
// from this
const punycode = require("punycode");
// to this
const punycode = require("punycode/");
```
