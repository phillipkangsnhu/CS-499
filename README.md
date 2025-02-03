#### Architecture

I used static files, a lightweight webserver, and SPA framework to build this project, in order of complexity from lowest to highest.
As I got higher in complexity, the amount of interleved systems became greater, but so did the strength of how opinionated the framework was.
Static files were definitely the easiest to spin up quickly, but also became cumbersome quickly when dealing with more complicated behaviors.
The SPA framework was more complex to start quickly, but was more adaptable to complex data structures and interactions with the database.

The backend used a NoSQL MongoDB database because it was quick to set up, and our data's schema was changing through the course.
The document structure and NoSQL nature of MongoDB allowed us to pivot fast and add more data structures without being bogged down in schema definitions and migrations.

#### Functionality

JSON is a data structure, whereas Javascript is a programming language. JSON helps mediatate data flow between the frontend and backend in a human-readable way, making it easier to debug issues.
We built out a form in static HTML which required the same component copy and pasted a few times with the field names being different.
We soon refactored this to generatively create form fields, making the code much easier to read.
Using reusable UI components also help to make the code more manageable and helps to avoid reinventing the wheel for parts of the website which share a lot of UI elements.

#### Testing

I initially tested by looking at the CLI output of function calls with console.error statements. As we started API development, I used Postman to mock API calls and see what data was returned.
As we added login security, more steps became involved in testing. I had to use the token returned by the login API call to call other API endpoints I wanted to test.
Endpoints route to specific method calls in a full stack application. Additionally, middleware such as security modules can be attached to endpoints to perform tasks such as validation and authentication before the specific method is called.

#### Reflection

This course has helped me to understand what a realistic professional task in full stack development looks like.
I have learned how to use ExpressJS, MongoDB, and Angular to create full stack applications on my own.
I believe that graduating with these skills already on hand will make me a more marketable candidate on the job market.
