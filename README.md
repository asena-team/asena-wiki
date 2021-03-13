# Asena Wiki
[![Netlify Status](https://api.netlify.com/api/v1/badges/da21a850-a44d-43d3-8d5b-9fbba2c06eda/deploy-status)](https://app.netlify.com/sites/asena-wiki/deploys)

The docs of [Asena](https://github.com/anilmisirlioglu/Asena), a discord community bot. Thanks to [docusaurus](https://docusaurus.io/).

## Usage

## Installation

```sh
yarn install
```

## Local Development

```sh
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```sh
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
