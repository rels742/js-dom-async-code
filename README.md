# Async Code
All the JavaScript code we've been writing so far has been **synchronous**. As we move in to JavaScript on the front end, we'll start to encounter **asynchronous** (or "async") code. In this workshop we look at the difference between synchronous and asynchronous code.

## Learning Objectives
- Explain the difference between synchronous and asynchronous code 
- Understand that console.log can be used to get visibility on the order of code execution

## Synchronous vs Asynchronous Code
By "synchronous code" we simply mean that the order of execution is sequential. Our code executes from the top to the bottom in the order we expect:  

```javascript
console.log("starting")

function add(num1, num2) {
  console.log("in the add function")
  return num1 + num2
}

const result = add(10,12)
console.log("10+12 is:" + result)

console.log("All done!")
```

Looking at this code, you can probably predict the order of the console.log messages when the code is executed:

```
starting
in the add function
10+12 is:22
All done!
```

In contrast, **asynchronous code is code that runs later in response to some kind of event**. Try and predict the order of execution here:

```javascript
console.log("Starting")
    
function sayHello() {
  console.log("Hello!")
}

setTimeout(sayHello, 10)

console.log("All done!")
```

You can open the `example-timeout.html` file in the browser yourself to check. This is what you will see:

```
Starting
All done!
Hello!
```

This is an example of *asynchronous code*. `setTimeout` is a built-in JavaScript function. `setTimeout` takes a function as a first argument, a time interval in milliseconds as a second argument, and then runs the function after that time period has elapsed. 

**The code is run later, once the time has passed.** 


Here's another example using `addEventListener`. `addEventListener` allows us to run code in response to a specific event happening - in this case, when the user clicks the page. Again, don't worry about the specifics of the code, we'll have a dedicated lesson on `addEventListener`, but look where the console.log statements are. Open the `example-event-listener.html` page, click on the page and see what happens in the console log.

```javascript
console.log("Starting")

document.addEventListener("click", function () {
  console.log("you clicked the page!")
})

console.log("All done!")
```

**The code is run later, when the user clicks on the page.**

## Why does this behavior exist?
Couldn't the call to load data from the other website just run like a normal function call? Why is it asynchronous? 

The browser is only able to run one section of code at a time. Without the ability to run asynchronous code, our program would have to stop and wait until the resource was loaded, or the timeout reached, or until the user clicked on the page. By allowing code to be run asynchronously (**to be run later once an event occurs**), the browser can do multiple things at the same time. In front-end development, asynchronous code is extremely common so it's an important concept to be aware of.

In technical terms, the mechanism that allows the browser to run code later in response to an event is know as "the event loop". This is an [excellent video ](https://www.youtube.com/watch?v=8aGhZQkoFbQ) that goes in to more depth on the event loop if you are interested.

There are different ways we can work with asynchronous code that we will come back to later in the module.

## Exercise
Use the `setInterval` (see [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/setInterval#examples)) function along with the DOM functions to implement a simple page that displays a countdown from "10". When the page opens, 10 should be displayed. After a second, it should change to 9, then to 8, etc. Once the countdown reaches 0, the text should turn red and the countdown should stop.

### Extension
- When the countdown reaches 0, make the text flash
- Add a reset button that can be clicked when the timer reaches 0 to return the counter to 10.

## More Resources
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
