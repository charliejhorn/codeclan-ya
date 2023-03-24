# Serving HTML with Express

**Duration: 60 minutes**

## Learning Objectives

- Understand how to send HTML files using Express

## Introduction

Now that we have Express set up we will continue working on the same application, and in particular, generate more elaborate web pages.

> Download and open the start point. 

```bash
cd express_html_start
npm install
npm run server:dev
```

Go to http://localhost:9000

We are going to create a To-Do list. In Express we will serve the initial HTML. We will also link a JavaScript file to use the DOM to populate our list. 

We are going to code up our route to view all of the tasks and have them rendered using an HTML and the DOM.

## Serving HTML

We are going to have separate HTML files, and also a separate JS file to run in the browser. By convention any files that are being sent to the browser are stored in a folder called `public`

> Code along from this point, stopping server (ctrl+c) if it is running

```bash
mkdir public
```

And in here let's create a new HTML file for the index page.

```bash
touch public/index.html
```

Now we will add some HTML code in this template.

```html
<!-- index.html -->

<html>
    <head>
        <title>My To-Do List</title>
    </head>
    <body>
        <h1>My Todo List!</h1>
    </body>
</html>
```


Now the view function can be simplified.

To show this HTML file in the browser we will need to use a function from Express called `sendFile`.

This function takes a filename to send.

In order for express to find our public files we will need to tell it where to look for any `static` files. (Like CSS & JS files)

To start we will bring in a variable called `path` which will allow us to access the file paths. Then tell Express to use the public folder as the static path. 



```js
// server.js

var express = require('express');
var app = express();

var path = require('path'); // ADDED

app.use(express.static(path.join(__dirname, 'public'))); // ADDED
```

Next we will change our get function to use `sendFile` and send the index file back. To do this we need to specify a root folder. In our case this will be our public folder. 

```js
/ server.js

app.get("/", (req, res) => {
  res.sendFile('index.html', {'root': 'public'}) // MODIFIED
})

```

Now if we start the server and go to http://localhost:9000/ we should see the header.

And just like that we can now send HTML to the browser using Express. 

If we wanted CSS and maybe some front end JS (DOM manipulation) then these files would need to go inside public as well. They can be in other folders as long as we give the correct path. (i.e. css/style.css)

### More Dynamic Content

The logged in user will probably want to see their list in the home page, so we will extend the application to support that.

We will use some fake objects to get some To-Do List items to display:

Let's start by creating a JS file in the public folder. We will put it in a JavaScript folder 

```bash
mkdir public/js
touch public/js/app.js
```

and link it in the HTML

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/app.js"></script>
    <title>My ToDo List</title>
</head>

```

In app.js we will create an array of tasks to display: 

```js
// app.js

const tasks = [
    {title: "Buy Groceries", description : "Milk, Cheese, Beans" },
    {title:"Learn JavaScript", description: "Learn an awesome language"}

]
```


On the DOM side we have to solve a new problem. The list of tasks can have any number of entries, it is up to the DOM tp decide how many tasks are going to be presented in the page, so we needs to be prepared to render as many tasks as the we have sends.

Well... it's JavaScript, we can still use a `for loop` control structure.

### Loops

Let's start by adding a ul to our html

```html
<!-- index.html -->

<body>
    <h1>My ToDo List</h1>
    <ul id="todo-list">

    </ul>
</body>

```

Now in our app.js we will wait for DOM content to load and get our ul from the document: 

```js
// app.js

// After todo list

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#todo-list');
})

```

From here it is a case of looping through each task inthe todo list, creating an li, setting the text content and then appending to the list. 

```js
// app.js

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#todo-list');
    for (let task of tasks) {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.title} - ${task.description}`
        list.appendChild(taskItem);
    }
})
```

And just like that our Tasks are displayed on our page. 

## Recap

<details>
<summary>What folder must our HTML files go inside?</summary>
  public
</details>

<details>
<summary>Why use a RESTful route convention?</summary>
  To deal with requests in a structured and consistant way. 
</details>


## Summary

Express allow us to structure our routes in a well organised way using HTML.

Once Express sends through the HTML, the DOM allows us to be more dynamic in our content by giving us the ability to loop through data to be rendered.
