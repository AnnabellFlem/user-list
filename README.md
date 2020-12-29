# About project
This project is a game that is an adaptation of the popular show [Who wants to be a millionaire](https://wwbm.com/).💰

Written using **React** and **TypeScript**.

Application has the following rules:
- The player takes turns answering one of 12 questions.
- Each question has 4 possible answers (there is a possibility of more). One or more correct answers are possible. This is stated in the question.
- If the answer is correct, the player gets to the next question.
- If the answer is wrong, the player goes to the final screen.
- The final screen shows the overall result of the game.

#### Future Improvements

* Add a state manager to the implementation(for better testing functions and isolating state control logic)
* Add clearer typing and handling of errors
* Improve accessibility with more WAI-ARIA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

First of all, you will need [Node.js](https://nodejs.org) of version `12.18.3` or compatible with it, [npm](https://www.npmjs.com/) version `6.14.6` or compatible, and [git](https://git-scm.com/downloads) `2.25.1` or compatible.

Check if everything is OK by running `node -v`, `npm -v` and `git --version` in the CLI

## Available Scripts

In the project directory, you can run:

### `npm i`
This command helps to install all the necessary dependencies from the `package.json` before starting another actions with the project

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [jest](https://jestjs.io/docs/en/getting-started) for more information.

### `npm run build(predeploy)`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

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
