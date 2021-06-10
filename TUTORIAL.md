# Timestamp Microservice

> Welcome to the Timestamp Microservice certification project!

## 1. Instructions

Run your project by entering `npm start` in the terminal from the `timestamp-microserice` folder. After it's started, click the `localhost` button at the top left and open `localhost:8080` by clicking it in the drop down. 

### 1.1

Complete the tasks below

#### SUBTASKS

- You should provide your own project, not the example URL.
- A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds
- A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
- A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
- Your project can handle dates that can be successfully parsed by new Date(date_string)
- If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }
- An empty date parameter should return the current time in a JSON object with a unix key
- An empty date parameter should return the current time in a JSON object with a utc key
