# About project

This project is the implementation of interaction with the list of users. It was created for educational purposes.

Application has the following features:
- Ability to add a new user.
- Ability to edit user information.
- Filtering users by name.
- User credit card validation.
- Pagination for user list.

#### Future Improvements
* Add better handling of errors

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Built With
- [React](https://reactjs.org/) - a JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - open-source language which builds on JavaScript
- [Scss](https://sass-lang.com/documentation) - stylesheet language
- [Firebase](https://firebase.google.com/) - backend by Google
- [braintree/card-validator](https://github.com/braintree/card-validator) - credit card validator

### Prerequisites

First of all, you will need [Node.js](https://nodejs.org) of version `10.19.0` or compatible with it, [npm](https://www.npmjs.com/) version `6.14.4` or compatible, and [git](https://git-scm.com/downloads) `2.25.1` or compatible.

Check if everything is OK by running `node -v`, `npm -v` and `git --version` in the CLI

## Available Scripts

In the project directory, you can run:

### `npm i`
This command helps to install all the necessary dependencies from the `package.json` before starting another actions with the project

### `npm run start`

Runs the app in the development mode.<br />
if the browser didn't open automatically open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [jest](https://jestjs.io/docs/en/getting-started) for more information.

### `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.


### `npm run build(predeploy)`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

The `predeploy` script will run automatically before `deploy` is run.
This command allows you to deploy the project via **GitHub Pages** from the url with key `"homepage"` in `package.json`.

### `npm run eslint`

The `eslint` script will run [ESLint](https://eslint.org/docs/user-guide/getting-started) on `src/` directory.

### Hooks

The following pre-hooks are also configured on the project:
* `pre-commit` - before the commit, the hook will check the project code for compliance with the lint rules.
* `pre-push` - will run all tests before pushing.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
