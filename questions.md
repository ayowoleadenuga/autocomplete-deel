## 1. What is the difference between Component and PureComponent? give an example where it might break my app.
PureComponents in React is a component which does not re-render when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. PureComponent restricts the re-rendering ensuring the higher performance of the Component. 
It is basically the same as Component except that Pure Components take care of shouldComponentUpdate by itself, it does the shallow comparison on the state and props data. If the previous state and props data is the same as the next props or state, the component is not Re-rendered.

Note: The State and Props are Shallow Compared

React Components re-renders in the following scenarios:
-“setState” is called in Component
-“props” values are updated
-forceUpdate() is called
In the case of Pure Components, the React components do not re-render blindly without considering the updated values of React “props” and “state”. If updated values are the same as previous values, render is not triggered.

An example where it might break an app is when there is a consistent state update with the same values which causes a Component to be stuck in an endless loop of re-renderings, however, with the shallow comparison in PureComponent, unnecessary re-rending simply does not occur.

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
Context is used to communicate with deeply contained components. For example, a root component defines a theme, and any component in the component tree might (or might not) be interested in this information. Like in the official context example. ShouldComponentUpdate (SCU) on the other hand short circuits the re-rendering of a part of the component tree (including children), for example if the props or state of a component are not modified in a meaningful way. As far as the component can tell. However, while trying to achieve this, ShouldComponentUpdate might accidentally block context propagation i.e ShouldComponentUpdate returning false causes any context update to be no longer propagated to child components.

## 3. Describe 3 ways to pass information from a component to its PARENT.
-This can be done by passing callback function, created in the parent, to the component as props which then calls the function with the data in order to update the parent with it.
-This can also be done via a state management tool like redux. You create a central store which serves as a mini database, reducer which basically modifies the store and a set of actions which are like instructions with which the reducer acts upon in order to carry out its job effectively. An action to update the store would then be 'dispatched' from the component and the parent, having subscribed to the store, would then gain access to such data.
-Another way to go is to use the context api. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

## 4. Give 2 ways to prevent components from re-rendering.
-Memoization using useMemo() and UseCallback() Hooks
-Replace useState() with useRef() (in certain contexts)

## 5. What is a react fragment and why do we need it? Give an example where it might break my app.
A Fragment is a common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. If you try to render multiple elements without a certain form of grouping under one dom entity, such app would break. Fragments gives the feel of a container without necessarily adding any element to the DOM

## 6. Give 3 examples of the HOC pattern.
-Apollo client
-Use of context
-WithStyles in Material UI

## 7.  what's the difference in handling exceptions in promises, callbacks and async...await.
When using promises the catch() method will catch the error caused by the throw statement and reject(); Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler WHILE for async await, try and catch in JavaScript is basically what is used. You try a bunch of stuff and you wrap it in a safety blanket and then if anything goes wrong, you catch the error and handle it. It does not require chaining like in promises. Any code inside of the try block is in the safe zone. It won't break the entire application if some of the code within the try errors out. Instead, it will just fail over to the .catch().

## 8. How many arguments does setState take and why is it async?
The setState method takes up to 2 arguments. We usually pass in only one. The first argument can be an object or a callback that's used to update the state. which calls setState once, and then calls setState again in the callback. The second argument is a function that’s always run after setState is run.
It’s an asynchronous method that’s batched. This means that multiple setState calls are batched before a component is rerendered with the new state. setState doesn’t immediately mutate the state but creates a pending state transaction. This means that accessing the state immediately after call setState can possibly return the old value.


## 9. List the steps needed to migrate a Class to Function Component.
-use function instead of class
-remove the constructor
-remove the render() method, keep the return
-add const before all methods
-remove this.state throughout the component, if any
-remove all references to ‘this’ throughout the component
-Set initial state with useState() hook
-change this.setState(); instead, call the function that you named in the useState hook to update the state.
-remove all other lifecyle methods and replace with the corresponding use of useEffect

## 10. List a few ways styles can be used with components.
-By linking (importing) an external .css or .scss file into the component while using identifiers or attributes like classnames and ids
-By using styled components
-By inserting styles object inline via the `style` prop of the components jsx elements

## 11. How to render an HTML string coming from the server.
The best way to go about this is by can using `dangerouslySetInnerHTML` attributes to render your html strings. dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a __html key, to remind yourself that it’s dangerous.

