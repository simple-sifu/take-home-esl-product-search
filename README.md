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

# Use Case

- load home page
![Screen Shot 2023-04-28 at 11 55 50 PM](https://user-images.githubusercontent.com/36891099/235282541-c74f7e06-d9de-4e8a-95bd-048d5b773eb6.png)

- select magnifier glass on far right corner
![image](https://user-images.githubusercontent.com/36891099/235282559-0cbf3c5d-60bb-48cd-8d9f-8c53a217df72.png)

- a single character like 'd' on search bar may show 4 different types of products.
![image](https://user-images.githubusercontent.com/36891099/235282577-f741441e-0fa9-4cb4-b334-d041e99a235f.png)

- The following selections will send you to the display Carousel page:
   1. click See all Results link will send you the carousel of products on display page.
   2. press return on search bar when it shows products.
![image](https://user-images.githubusercontent.com/36891099/235282758-8955117b-bed4-4449-ac24-9c73d22c4a62.png)

- press return when you have products will show carousel of products on display page.
![image](https://user-images.githubusercontent.com/36891099/235282630-ae037ca3-d812-45c8-b181-6efa994570e0.png)
![Screen Shot 2023-04-28 at 11 56 48 PM](https://user-images.githubusercontent.com/36891099/235282640-9369e762-b858-4944-b390-00a454b20f18.png)


- click ELC icon on the top left corner on the navbar will bring you back to home page.

