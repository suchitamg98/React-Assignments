1)What is a Microservice?
The idea is to split your application into a set of smaller, interconnected services instead of building a single monolithic application. Each service handles a specific job, like handling user accounts or managing payments. Inside each service, there's a mini-world of its own, with its own set of rules (business logic) and tools (adapters). Some services talk to each other in different ways, like using REST or messaging. 

2)What is Monolith architecture?
In the past, we used to build large projects where everything was bundled together. Imagine building an entire application where all the code—APIs, user interface, database connections, authentication, even notification services—resides in one massive project with single code base.

3)What is the difference between Monolith and Microservice?
Monolith:
Size and Complexity Limitation: Monolithic applications become too large and complex to understand.
Slow Startup: The application's size can slow down startup time.
Full Deployment Required: Every update requires redeploying the entire application.
Limited Change Understanding: It's hard to grasp the full impact of changes, leading to extensive manual testing.
Difficult Continuous Deployment: Implementing continuous deployment is challenging.
Scaling Challenges: Different modules may have conflicting resource needs, making scaling difficulty.
Reliability Concerns: Bugs in any module can crash the whole application, affecting availability.
Adoption of New Technologies: Making changes in frameworks or languages is expensive and time-consuming since it affects the entire application.
Microservices:
Simpler Development: Microservices break down complex applications into smaller, easier-to-handle services. This makes development faster and
maintenance easier.
Independent Teams: Each service can be developed independently by a team focused on that specific task.
Flexibility in Technology: Developers have the freedom to choose the best technologies for each service, without being tied to choices made at the project's start.
Continuous Deployment: Microservices allow for independent deployment, enabling continuous deployment for complex applications.
Scalability: Each service can be scaled independently, ensuring efficient resource usage
Separation of Concerns: With each task having its own project, the architecture stays organized and manageable.
Single Responsibility: Every service has its own job, following the principle of single responsibility. This ensures focused and efficient development.


4) Why do we need a useEffect Hook?
If we have to do something after the rendercycle complets we can pass it inside the ‘ useEffect() ' . this is the actual use case of useEffect. It is really helpful to render data which we will get after the ‘ fetch() ' operation and we are going to follow second approach which we have discussed already. 

5) What is Optional Chaining?

Optional Chaining is a feature in JavaScript (introduced in ECMAScript 2020) that allows developers to safely access deeply nested properties of an object without having to explicitly check if each reference in the chain is valid. This can help to avoid runtime errors when accessing properties of null or undefined objects.
The syntax for optional chaining uses the ?. operator. When used, if a reference before the ?. operator is null or undefined, the expression short-circuits and returns undefined without attempting to access further properties. This makes the code more concise and readable.

6) What is Shimmer UI?
Shimmer UI is a technique that shows placeholder content while data is loading, reducing wait time and keeping users engaged.

7) What is the difference between JS expression and JS statement?
An expression is any valid unit of code that resolves to a value. Expressions can be as simple as a single value or as complex as a series of operations that evaluate to a value. Expressions can be used wherever values are expected.
let a = 3 * 4;  // `3 * 4` is an expression that evaluates to 12
A statement is a syntactic unit of code that performs an action. Statements typically control the flow of execution and do not necessarily produce a value. They can contain expressions and are often terminated with a semicolon.
if (a > 10) {  // `if` is a statement that performs a conditional action
  console.log("a is greater than 10");
}
expressions produce values and can be composed to form more complex expressions, while statements define the structure and control the execution flow of a program. Understanding the distinction helps in writing clear and effective JavaScript code.

8) What is Conditional Rendering, explain with a code example?
practice of rendering different UI elements or components based on certain conditions. This allows developers to create dynamic and responsive user interfaces.

9)What is CORS?
CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers that restricts web pages from making requests to a
different origin (domain) than the one from which it was served.
(Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

10) What is async and await?
The async and await keywords provide a clean and powerful way to handle asynchronous operations in JavaScript, making it easier to work with Promises and improving the readability and maintainability of the code.
The async keyword is used to declare an asynchronous function. When a function is declared as async, it returns a Promise implicitly. This means you don't have to manually return a Promise from the function; JavaScript does it for you.
The await keyword can only be used inside an async function. It pauses the execution of the async function until the Promise being awaited is resolved or rejected. This makes asynchronous code look and behave more like synchronous code.

11)What is the use of `const json = await data.json();` in getRestaurants()?
The line const json = await data.json(); is used to parse the response from an HTTP request into a JSON object. This is typically found in the context of a function that fetches data from an API endpoint
