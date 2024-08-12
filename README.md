Cucumber HTML Reporter with GitHub Pages

# Introduction

This repository is a test automation framework using Playwright with CucumberJS written in Typescript.

- [Playwright Documentation](https://playwright.dev/)
- [Cucumber Documentation](https://cucumber.io/docs/guides/overview/)
- [Typescript Documentation](https://www.typescriptlang.org/)

# Getting Started

It is recommended to use [Visual Studio Code (VSCode)](https://code.visualstudio.com/download) to modify the framework.
The following extensions will make it easier to develop the tests and framework:

- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Cucumber for VSCode](https://marketplace.visualstudio.com/items?itemName=CucumberOpen.cucumber-official)

## Setting up the Test Repository

Install the following pre-requisites on your machine

- [NodeJS](https://nodejs.org/en)

In a terminal window, type the following where you want to setup the repository

1. Clone this repository to your local machine

2. Once inside the root directory of the project, initialise and install all the dependencies:
   ```sh
   npm install
   ```

3. Install the Playwright browsers:
   ```sh
   npx playwright install
   ```

# Executing the Tests

Run all the tests in headless mode:
   ```sh
   npm test
   ```

# GitHub Pages