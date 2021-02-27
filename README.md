# Mock Stock Market Recommender

This project is a mock project of a simple app created in React using TypeScript meant to provide recommendations on stocks based on prices and social media counts.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Styled Components

I hesitated a lot before introducing Styled Component in this sample app since requirements specified that we should keep the amount of reference to a minimum and use (CSS/SASS/LESS). I decided to add Styled component anyway for the following reasons.

-   App size is a concern and as we move on with CSS, changes are we will forget to maintain some css. Styled component will remove any unrequired
-   Chances are that at some point we will want to introduce some theming and this will be faily easy to do with styled component.
-   Styled component adds some tooling that will allow us to easily identify element as we inpect the DOM.
-   Using styled component, browser specific prefixes on css attributes gets added automatically so it is easier to support multiple browsers.
-   Style component combined with Jest also allow us to include css in our component snapshot.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

Launches the test and output an overview of the code coverage.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run analyze`

Build the project and run a basic package analyzer so we can review the package content and size.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Enjoy!
