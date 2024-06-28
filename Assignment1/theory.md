1)what is React ? why React is known as 'React?
React is a javascript library. The name React was chosen because the library was designed to 
allow developers to react to changes in state and data within an application,
and to update the user interface in a declarative and efficient manner.

2)what is Library?
Library is a collections of prewritten code snippets that can be used and 
reused to perform certain tasks.A perticular Javascript library code can be 
plugged into application code which leads to faster development and fewer 
vulnerbilities to have errors. example-React,jQuery

3)what is framework?
Framework provides a basic foundation or structure for a website or an application.
example-Angular

4)Similarities between Library and Framework?
Framework and libraries are code written by third parties to solve regular
problems or optimise performance.

5)Difference between Library and Framework?
A key difference between the two is Inversion of control.When using a library
the control remains with developer who tells the application when to call 
library function.
When using a framework the control is reveresed which means that the framework
tells the developers where code needs to be provided and calls it as it requires.

6)what is Emmet?
Emmet is the essential toolkit for web-developers.It allows you 
to type shortcuts that are then expanded into full-fledged.

7)what is cross origin?
The crossorigin attribute in the script tag enables cross origin resource sharing
for loading external javascript files from different origin than hosting 
web page.This allows the script to access resoutrces from the server hosting
the script such as making HTTP requests or accessing data.

8)What is CDN? Why do we use it?
CDN stands for content delivery network. 
A CDN (Content Delivery Network) is a group of servers spread out over many locations. 
These servers store duplicate copies of data so that servers can fulfill data requests 
based on which servers are closest to the respective end-users.
Using CDN links in React gives quick and convenient way to integrate React into your projects 
without the need for a package manager

9)What is diference between React and ReactDOM?
React is a JavaScript library for building User Interfaces.
ReactDOM is the JavaScript library that allows React to interact with the DOM.

10)What is difference between react.development.js and react.production.js files via CDN?
In development mode, we can enable and utilize React developer tools, devtools profiler, 
debugging environment attached with source code. We can utilize various functionalities 
such as Hot Module Replacement,diagnostics so that development environment will help to debug code.
In production mode, compression and minification of Javascript and other resources happens 
to reduce size of the code which is not the case when it comes to development mode. 
Performance will be much faster in production mode when compared to development mode.

11)what is async and defer?
The async and defer attributes are used in the <script> tag in HTML to control how 
scripts are loaded and executed.
When a script has the async attribute, the script is downloaded in parallel 
with parsing the HTML.
Once the script is downloaded, it is executed immediately, 
pausing the HTML parsing.
It is useful for scripts that do not depend on other scripts 
or the DOM being fully loaded.
When a script has the defer attribute, the script is also downloaded 
in parallel with parsing the HTML.
However, the script is executed only after the HTML parsing is complete.
It is useful for scripts that depend on the DOM being fully constructed.

NOTE:React overwrite everything inside "root" and replaces with whatever
inside render.