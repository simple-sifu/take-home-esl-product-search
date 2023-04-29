# Setup

- npm install
- npm start - will bring up both client and server
- npm build - stores minified build artifact in builds/prod
- npm build-dev - stores build artifacts in builds/dev
- npm test - will run jest tests.

# linting code

- Added eslint and prettier plugin
- Also added to .vscode/settings.json for code formatting

# Postman is a headless browser we can use to test

- collections are stored in server/postman

# Tests

- jest tests were written for Caching of Search Results

# Webpack

- replaced gulpfile
- allow for webpack use and builds in different environments

# Environment

- configured in .env and by using dotenv library

# Search Bar

- a single character on search bar may show 4 different types of products.
- press return when you have products will show carousel of products on display page.
- click ELC will bring you back to home page.
