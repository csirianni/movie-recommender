# Frontend

## About

The frontend displays the user-interactive page that stores user input and provides movie recommendations. The user selects three movie examples and then clicks the Recommend button. Recommendations are displayed sequentially with a Next button for up to 10 total recommendations.

The frontend is built using React with [Chakra UI](https://chakra-ui.com/) components for styling. The autocomplete text input is a modified version of the open source [Chakra UI Simple Autocomplete](https://github.com/Fedeorlandau/chakra-ui-simple-autocomplete) component which I have contributed to.

## Configuration

To run the frontend server, use your preferred terminal to `cd` into `/frontend` and then install the required packages by running

```console
npm install
```

Then, you should be able to run the server with the command

```console
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

To build the frontend for production, run

```console
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

See the `create-react-app` docs about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Testing

To run the tests, run `npm test` in your terminal while in the `/frontend` folder. This launches the test runner in the interactive watch mode. See the `create-react-app` docs about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
