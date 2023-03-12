const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjdkYmJkZDBiLTU4ZGItNDYyNC1hN2ZhLThhOWUzZDcxZWU3ZC0xNjc4NjU1NDE1MjYxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZTk5NTY5ZDAtMzJiYS00OWI0LTgyZTYtMzU4ZGQxY2I1ZmZlIiwidHlwZSI6InQifQ.p5mic75Nvf0tAhRfjzaWKMZfFN7o0Tv4ncK22LQVTvo'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
