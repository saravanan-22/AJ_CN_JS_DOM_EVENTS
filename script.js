// In JavaScript, the Document Object Model (DOM) 
// allows you to interact with and manipulate the structure and content of HTML and XML documents. 
// DOM events are mechanisms through which you can respond to user interactions or other actions that occur in a web page. 
// Events can be triggered by users (such as clicking a button) or by the browser (such as the page finishing loading). 
// Handling events is a fundamental part of creating interactive and dynamic web applications.

// 
// Here's how DOM events work:

// Event Types: There are numerous types of events, such as clicks, keyboard input, mouse movement, form submissions, and more. 
// Each event type corresponds to a specific user action or interaction with the webpage.

// Event Listeners: To respond to events, you attach event listeners to specific DOM elements. 
// An event listener is a function that "listens" for a specific type of event on an element and triggers a callback function when that event occurs.

// For example, you might attach a click event listener to a button element to perform an action when the button is clicked:

// Event Handling: When the specified event occurs on the element, the attached callback function is executed. 
// This is where you write the code that responds to the event. For example, you might change the content of an element, show/hide elements, make network requests, or update data.

// Event Object: When an event occurs, an event object is created that contains information about the event, such as the type of event, the target element that triggered the event, and additional event-specific data. 
// This object is automatically passed as a parameter to the event handler function.

// Event Propagation: Events can propagate through the DOM tree in two phases: capturing phase and bubbling phase. 
// In the capturing phase, the event starts from the root element and moves down to the target element. 
// In the bubbling phase, the event starts from the target element and moves up the DOM tree. 
// You can control event propagation using the addEventListener() method's third parameter.