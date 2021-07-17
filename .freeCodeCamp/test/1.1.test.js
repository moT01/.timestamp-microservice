const assert = require('assert');
const fetch = require('node-fetch');

describe('SUBTASKS 1.1', async () => {
  const port = process.env.STROVE_PORT_8080;
  const url = port.replace('silisky.com', 'codeally.io');

  it(':1 A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds', async () => {
    try {
      const response = await fetch(`${url}api/2016-12-25`);
      const data = await response.json();
  
      assert.strictEqual(data.unix, 1482624000000);
    } catch (error) {
      assert(false);
    }
  });

  it(':2 A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT', async () => {
    try {
      const response = await fetch(`${url}api/2016-12-25`);
      const data = await response.json();
  
      assert.strictEqual(data.utc, 'Sun, 25 Dec 2016 00:00:00 GMT');
    } catch (error) {
      assert(false);
    }
  });

  it(':3 A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }', async () => {
    try {
      const response = await fetch(`${url}api/1451001600000`);
      const data = await response.json();
  
      assert(data.unix === 1451001600000 && data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT');
    } catch (error) {
      assert(false);
    }
  });

  it(':4 Your project can handle dates that can be successfully parsed by new Date(date_string)', async () => {
    try {
      const response = await fetch(`${url}api/05 October 2011`);
      const data = await response.json();

      assert(data.unix === 1317765600000 && data.utc === 'Tue, 04 Oct 2011 22:00:00 GMT');
    } catch (error) {
      assert(false);
    }
  });

  it(':5 If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }', async () => {
    try {
      const response = await fetch(`${url}api/this-is-not-a-date`);
      const data = await response.json();
      
      assert.strictEqual(data.error.toLowerCase(), 'invalid date');
    } catch (error) {
      assert(false);
    }
  });

  it(':6 An empty date parameter should return the current time in a JSON object with a unix key', async () => {
    try {
      const response = await fetch(`${url}api`);
      const data = await response.json();

      const now = Date.now();

      assert((data.unix - now).toString().length < 6);
    } catch (error) {
      assert(false);
    }
  });

  it(':7 An empty date parameter should return the current time in a JSON object with a utc key', async () => {
    try {
      const response = await fetch(`${url}api`);
      const data = await response.json();

      const now = Date.now();
      const serverTime = new Date(data.utc).getTime();

      assert((serverTime - now).toString.length < 6);
    } catch (error) {
      assert(false);
    }
  });
});
