# The REST API used for the Oláh Barbershop [app](https://github.com/Olah-Barbershop/app) and [website](https://github.com/Olah-Barbershop/website)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) &nbsp;
[![GitHub Release](https://img.shields.io/github/v/release/Olah-Barbershop/API)](https://github.com/Olah-Barbershop/API/releases/latest)

## Documentation
Check out the API documentation [here](DOCUMENTATION.md)

## Instructions
First, clone the repository
```sh
git clone https://github.com/Olah-Barbershop/API.git
cd API
```
Add your MongoDB url to a `.env` file
```env
DATABASE_URL=[your database url]
```
Now, you're going to need an SSL certificate. You'll need two files: `server.cert` and `server.key`. Add your certificate and you private key to the corresponding files.

Finally, install the dependencies and start the server
```sh
pnpm install
node server.js
```
