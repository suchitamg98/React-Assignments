1)What is JSX?
JSX is HTML-like or XML-like syntax. JSX stands for JavaScript XML. It's a syntax extension for JavaScript.
It is not a part of React. React apps can be built even without JSX but the code will become very hard to read.
It is not HTML inside JavaScript.
JavaScript engine cannot understand JSX as it only understands ECMAScript
2)Superpowers of JSX?
- Sanitizes the data
If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen, that attack is
called cross-site scripting. 
It can read cookies, local storage, session storage, get cookies, get info about your device, and read data. JSx takes
care of your data.
If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before
rendering
- Makes code readable
JSX makes it easier to write code as we are no longer creating
elements using React.createElement()
-Makes code simple and elegant
-Show more useful errors and warnings
- JSX prevents code injections (attacks)

3)Role of type attribute in script tag? What options can I use there?
The type attribute in the <script> tag specifies the MIME type of the script. This helps the browser understand how to interpret and execute the content within the <script> tag. Although it is optional in HTML5 (where the default is text/javascript), it can be useful for specifying different types of scripts or handling scripts in different contexts.
-Default JavaScript: For most modern web development purposes, you don't need to specify type="text/javascript" as it is the default.
-Modules: Use type="module" for modular JavaScript code. This enables the use of import and export statements.
-Special Formats: Use specific types like application/json or application/ld+json when embedding JSON data directly within the HTML.
The type attribute in the <script> tag is a versatile tool that helps the browser understand the type of script being executed, allowing for various scripting languages and data formats to be embedded within HTML documents.

4){TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
For rendering the React element inside the react copmonent  we can use {TitleComponent}
For rendering the React component we use {<TitleComponent/>} and {<TitleComponent></TitleComponent>} this also works same.
