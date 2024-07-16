1)Is JSX mandatory for React?
No, JSX is not mandatory for React, but it is highly recommended and commonly used due to its simplicity and readability.

2) Is ES6 mandatory for React?
No, ES6 (ECMAScript 2015) is not mandatory for React, but it is highly recommended and commonly used due to the numerous improvements and features it brings to JavaScript. ES6 introduces several syntax enhancements and functionalities that make writing React applications more efficient and easier to understand. 
-Arrow Functions:
-Classes:
-Destructuring:
-Template Literals:
-Modules:

3){TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
For rendering the React element inside the react copmonent  we can use {TitleComponent}
For rendering the React component we use {<TitleComponent/>} and {<TitleComponent></TitleComponent>} this also works same.

4 ) How can I write comments in JSX?
To write a single-line comment in JSX, you can use JavaScript's // syntax, but you need to wrap it inside curly braces {}.
For multi-line comments, you use the /* ... */ syntax inside curly braces {}.

5)What is <React.Fragment></React.Fragment> and <></> ?
In React, <React.Fragment> and its shorthand <></> are used to group a list of children without adding extra nodes to the DOM. They help in returning multiple elements from a component without wrapping them in an unnecessary container element like a <div>.
function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
    </>
  );
}

6)What is Virtual DOM?
the Virtual DOM is a core feature of React that helps improve performance and efficiency by creating an in-memory representation of the real DOM and updating it in a highly optimized way.
Consider a simple example where a list of items is displayed. If one item in the list is updated, the traditional approach would involve updating the entire list in the real DOM. With the Virtual DOM, only the specific item that changed is updated, making the process much faster and more efficient.

7)What is Reconciliation in React?
Fiber introduces a new reconciliation algorithm that enables incremental rendering of the virtual DOM. This allows React to break down rendering work into chunks and spread it out over multiple frames, resulting in smoother updates and better performance for complex applications.


8)What is React Fiber?
React Fiber is the new reconciliation engine in React, a popular JavaScript library for building user interfaces. It was introduced in React 16 to enhance the performance and capability of the React framework.
-Reconciliation Algorithm
-Async Rendering
-Error Handling
-Better Animation and Layout
-Backwards Compatibility
-Scheduling

9)Why we need keys in React? When do we need keys in React?
It makes each of the list item uniquely represented.Each of the item should have the key whenever we are looping on to any list we have to give the key property. 

10)Can we use index as keys in React?
yes we can use index as keys but it is not recomanded way.

11)What is props in React? 
Short form for properties. To dynamically send data to a component we use props. Passing a prop to a function is like
passing an argument to a function.

12)What is a Config Driven UI ?
It is a user Interface that is built and configured using a declaration configuration file or data structure, rather than
being hardcoded.
Config is the data coming from the api which keeps on changing according to different factors like user, location, etc. 
