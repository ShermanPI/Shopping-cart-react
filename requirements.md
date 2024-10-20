#### REMEMBER: There is no silver bullet
> **_NOTE:_** Some people like reducers, others don’t. That’s okay. It’s a matter of preference. You can always convert between useState and useReducer back and forth: they are equivalent!

# Ecommerce

✅ - Display a list of products coming from a JSON
✅ - Add a category filter
✅ - Add a price filter
✅ - Use `useContext` to avoid passing unnecessary props.
✅ - use `useId` at leat once, and say why to use it, and which use cases does this have

#what is useID? useId is a React Hook for generating unique IDs that can be passed to *accessibility attributes*

✅ - make a customHook to use the cart context, but rememeber to put a validator to check if the contento of the context is undefined because, it is a good practive to validate it when the place the hook is using is not the indended to be at first place, so throw an error if the context is === undefined

✅ - if a product is in the cart, make the product card is showed different to the user

- try passing a function to the setState functions to be able to manage the previous state inside the function (try do it with deleting a product from the cart and when the product is not in the cart already). Take in account that sometimes you want and is a good practice to use this updater function when the new state depends of the prev state. Here some cases where the updater function is better than using a copy of the previous state:

    1. When the new state depends on the previous state.
    2. When multiple state updates are queued.
    3. In asynchronous code.
    4. When you cannot guarantee immediate execution.
    5. When you’re updating part of a nested state object.
    6. To avoid race conditions.

// NOTE: you can use structuredClone to make a deep copy of the actual state if you need to make a new state from the previous one, instead of using the spread operator for a shallow copy, in some cases (adding, a new product to the cart) is ok, because the app is using only the superficial part of the product object

- use a Reducer to manage the cart global state

- Why use a Reducer?
    1. They help with complex state logic
    2. Predictable State Updates: (state + action = new state)
    3. Centralized State managment: Have code in one side
    4. easier to test (you dont even has to render the component to test the state logic)
    5. Better than useState for Complex State (with states that depend on previous values or when multiple pieces of related state exist, reducers are a cleaner solution)
    6. Improved Scalability (simplifies the refactoring)
    7. you can use the reducer in another product, like zustand or redux

> **_NOTE:_** useReducer DOCUMENTATION: https://react.dev/learn/extracting-state-logic-into-a-reducer

> **_NOTE:_** Managing state with reducers is slightly different from directly setting state. Instead of telling React “what to do” by setting state, you specify “what the user just did” by dispatching “actions” from your event handlers. This is more descriptive of the user’s intent

> **_NOTE:_** the function passed to dispatch is called "actions" and represents the action dispatched by the dispatch function

> **_NOTE:_** An action object can have any shape. By convention, it is common to give it a string type that describes what happened, and pass any additional information in other fields

> **_NOTE:_** A "reducer function" is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state

> **_NOTE:_** it’s a convention to use switch statements inside reducers. But irs fine use if/else statements

> **_NOTE:_** Interesting fact: Although reducers can “reduce” the amount of code inside your component, they are actually named after the reduce() operation that you can perform on arrays. It takes the result so far and the current item, then it returns the next result

> **_NOTE:_** Reducers in react are the same idea of the array.reduce(): they take the state so far and the action, and return the next state. In this way, they accumulate actions over time into state (you can see an example of how You could even use the reduce() method with an initialState and an array of actions to calculate the final state by passing your reducer function to it, in the useReducer DOCUMENTATION leaved above - in deep dive)

> **_NOTE:_** The useReducer Hook is similar to useState—you must pass it an initial state and it returns a stateful value and a way to set state (in this case, the dispatch function). But it’s a little different.
<!-- The useReducer Hook takes two arguments:

- A reducer function
- An initial state
And it returns:

- A stateful value
- A dispatch function (to “dispatch” user actions to the reducer) -->

<!-- Reducers are a different way to handle state. You can migrate from useState to useReducer in three steps:

Move from setting state to dispatching actions.
Write a reducer function.
Use the reducer from your component. -->

> **_NOTE:_** REACT RECOMMENDATION:

<!-- We recommend using a reducer if you often encounter bugs due to incorrect state updates in some component, 
and want to introduce more structure to its code. 
You don’t have to use reducers for everything: feel free to mix and match! '
You can even useState and useReducer in the same component. -->

- make a customHook to use the cart reducer

## Cart

- Make it possible to add products to the cart.
- Make it possible to remove products from the cart.
- Make it possible to modify the quantity of products in the cart.
- Synchronize the cart changes with the product list.
- Save the cart in `localStorage` so that it is recovered when the page is reloaded. (bonus points)

- make two mini practices appart to use reducers