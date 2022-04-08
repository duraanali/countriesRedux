# Sprint Challenge: Redux - Countries

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Redux and Async Redux. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout Redux and your command of the concepts and techniques in the Async Redux.

You have four hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build an to showcase countries, you will utilize Redux as your state management. We gave you an starting point, follwo instructions to extend the applictaion.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- [ ] What is the difference between Global state and Component state? When would be a good time to use one over the other?
- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

## Project Set Up

Follow these steps to set up your project:

- [ ] `fork & clone` this repository.
- [ ] `cd` into the forked copy of this repository.
- [ ] **RUN** `yarn` to retrieve all `server-side` the dependencies.
- [ ] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/countries`. You should see an empty Array `[]` returned to you. This is an array that your **API** will be using to store our Country Data.
- [ ] **LOOK** at your `countries` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [ ] **cd** into `countries` and run `yarn` to retrieve the client side dependencies.
- [ ] **RUN** `yarn start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`.
We've added a typical `redux` file structure for you:

```
src
  - components
  - reducers
    - index.js
  - actions
    - index.js
```

This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Start in the `index.js` file by following all the prompts there to ensure that `Redux-Thunk` is wired up properly.
- [ ] Because `Redux-Thunk` is wired up as a middleware for this project. Be sure to utilize thunks when appropriate:

```js
return dispatch => {
  dispatch({ type: FOO_ACTION_TYPE });
  promise.then(({ data }) => {
    dispatch({ type: ANOTHER_ACTION_TYPE, payload: data });
  });
};
```

**API Design** - This is how you'll interface with the API and what is required from every endpoint.

### GET '/countries'

- [ ] Retrieve an array all the Countries in the Country DB by writing a `GET` to the endpoint `/countries`.
- [ ] Double check that your response from the server is an array of countries.

```js
[
  {
    name: 'United States',
    population: 370000000,
    land_area: 2568000,
    id: 0
  }
];
```

### POST '/countries'

- [ ] Design the functionality to add a country to the Country DB you'll need all three fields. `name`, `population`, and `land_area`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'United States',
  population: 370000000,
  land_area: 2568000,
}
```

- [ ] Double check to make sure that a country is created correctly once your functionality is built out.

Initially United States will be in the array, but it takes more than one country to make the the planet. Be sure to add a few countries to populate our planet.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Country DB:

```js
[
  {
    name: 'United States',
    population: 370000000,
    land_area: 2568000,
    id: 0
  },
  {
    name: 'Canada',
    population: 650000000,
    land_area: 28068000,
    id: 1
  }
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/countries/123', where 123 is the Id of the country you want to modify

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Country object. `name` `population` `land_area`.

Example:

```js
input:
{
  id: 1,
  name: 'France'
}
output:
[
  {
    name: 'Germany',
    population: 42342000,
    land_area: 320000,
    id: 1
  },
  {
    name: 'Mexico',
    population: 39480000,
    land_area: 493000,
    id: 0
  }
]
```

### DELETE '/countries/123', where 123 is the Id of the country you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the countries but with your requested country removed.

- [ ] You don't need any input beyond the url parameter of the country, so if we send up a delete request to `/countries/123` then you'll remove the country by that id.

Example:

```js
output: [
  {
    name: 'Germany',
    population: 42342000,
    land_area: 320000,
    id: 1
  }
];
```
