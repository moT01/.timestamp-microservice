# Timestamp Microservice

> Welcome to the Timestamp Microservice certification project!

## 1. Instructions

Build a full stack JavaScript app that is functionally similar to this: https://timestamp-microservice.freecodecamp.rocks/

Install your project dependencies by entering `npm ci` from the `timestamp-microservice` folder in the terminal. After that, start your server by running `npm start`. Follow the instructions in the terminal to view your project web page. Don't forget that you need to restart your server in order for your code changes to take place. Pass all the user stories below to complete the project.

### 1.1

Complete the tasks below

#### SUBTASKS

- A request to `/api/:date?` with a valid date should return a JSON object with a `unix` key that is a Unix timestamp of the input date in milliseconds
- A request to `/api/:date?` with a valid date should return a JSON object with a `utc` key that is a string of the input date in the format: `Thu, 01 Jan 1970 00:00:00 GMT`
- A request to `/api/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`
- Your project can handle dates that can be successfully parsed by `new Date(date_string)`
- If the input date string is invalid, the api returns an object having the structure `{ error : "Invalid Date" }`
- An empty date parameter should return the current time in a JSON object with a `unix` key
- An empty date parameter should return the current time in a JSON object with a `utc` key
