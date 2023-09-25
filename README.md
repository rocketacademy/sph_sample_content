# Rocket Academy React Shopping List Boilerplate Code

Here is the Shopping List Boilerplate code for the Rocket Academy codealong
In this repository we will explore a couple of React concepts:

## React Props

The term "props" stands for "properties" and is used for passing data from one component to another. As opposed to state in React, props are read-only. So, the data coming from a parent component can't be changed by the child component.

## React State

The state in React is an instance of React Component Class that can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component. In our workshop we will explore the useState hook to implement state into our functional components.

## React Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

## React useState Hook

The useState hook is used to manage state in a functional component. It provides a simple way to update state and trigger re-renders when the state changes. The performance implications of useState are generally minimal, as React is optimized to handle updates to state efficiently.

## React useContext Hook

UseContext is one of many built-in React hooks. It uses React's Context API which allows components to consume context values without the need to pass props down the component tree. It is useful when our context grows in size and complexity and we have multiple states with numerous functions.

## React useReducer Hook

useReducer returns an array with exactly two values: The current state. During the first render, it's set to init(initialArg) or initialArg (if there's no init ). The dispatch function that lets you update the state to a different value and trigger a re-render.

### Using the repository

To use this project properly you will need to install the required packages run the React Application, follow the instructions below:

### `npm i`

This command downloads a package and all of its dependencies, in this instance it reads the package.json to install the relevent modules to run the React Application.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

This command takes the ES6/7 syntax that ReactJs utilizes and compiles it down into ES5 readible script for our browser to display to us.

### Alterting the code

In this example we want to implement the shoppingList Component using the useContext and useReducer hooks from React JS, complete the files within the Provier and Reducer direectories.
Additionally to this are four components that are within the Components folder, we suggest you follow the code along or instructions within to create a website similar to this deployed version:
https://650d4d3fda78162069326a4e--sph-shopping-list.netlify.app/
