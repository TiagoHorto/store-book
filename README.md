# User Manual

1. Install the dependencies on project.
2. To run the project, just type the following command `npm start` in your terminal.
3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Libraries need to install

### styled-components
Styled-components is a library built for React and React Native developers. It allows you to use component-level styles in your applications. Styled-components leverage a mixture of JavaScript and CSS using a technique called CSS-in-JS.

### material-ui/core material-ui/icons
Material-UI is a library that provides React components for easy and fast web development.

### react-router-dom       
React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.

### axios    
Axios is a lightweight HTTP client based on the $http service within Angular. js v1. x and is similar to the native JavaScript Fetch API. Axios is promise-based, which gives you the ability to take advantage of JavaScript's async and await for more readable asynchronous code.

### i18next react-i18next
I18next is an internationalization-framework written in and for JavaScript. But it's much more than that.
i18next goes beyond just providing the standard i18n features such as (plurals, context, interpolation, format). It provides you with a complete solution to localize your product from web to mobile and desktop.

### redux redux-thunk    
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.

### react-redux   
React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. React Redux is conceptually simple.

## Technical Decisions
    Styled components were used in the project, which in general make the code more readable and easier to understand. 
    A folder structure was also created for this purpose.

    Redux Thunk middleware allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

    Axios is an HTTP client library that allows you to make requests to a certain endpoint, in this case the Google Books api was used to obtain the complete information of books.