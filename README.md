# The LEGACY REST API used for the Oláh Barbershop [app](https://github.com/Olah-Barbershop/app) and [website](https://github.com/Olah-Barbershop/website)

## The currently used API is available [here](https://github.com/Olah-Barbershop/API)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) &nbsp;
[![GitHub Release](https://img.shields.io/github/v/release/Olah-Barbershop/API)](https://github.com/Olah-Barbershop/API/releases/latest) &nbsp;
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Olah-Barbershop/API/test.yml?label=test)](https://github.com/Olah-Barbershop/API)

## Documentation
Check out the API documentation [here](DOCUMENTATION.md)

## Instructions
Clone the repository and install the dependencies
```sh
git clone https://github.com/Olah-Barbershop/API.git
cd API
pnpm install
```
Add your MongoDB url and (optionally) API port to a `.env` file
```env
DATABASE_URL=[your database url]
PORT=[port for the API]
```
You'll need an SSL certificate. Add your certificate to `server.cert` and you private key to `server.key`.

Start the server
```sh
node server.js
```
