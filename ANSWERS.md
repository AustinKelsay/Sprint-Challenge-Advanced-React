- [ ] Why would you use class component over function components (removing hooks from the question)?

Many companies have their codebase already in class components since hooks came so recently. Also, class components allow you to have more control over the lifecycle with methods like componentDidMount(), componentWillUpdate() etc.

- [ ] Name three lifecycle methods and their purposes.

componentDidUpdate(prevProps, prevState) is called to confirm that an update occured
componentWillMount() is called before the initial render, it can still operate on your state though
componentDidMount() is called once all of our children elements and component instances are mounted

- [ ] What is the purpose of a custom hook?

A custom hook allows you to abstract away a lot of specific logic preformed on state and generalize it in a few D.R.Y. pieces of code.

- [ ] Why is it important to test our apps?

It helps us dicover bugs quicker, allows us to test edge cases, think through our code with more clarity, acts as a type of documentation for the code, makes updates and new implementations easier to plan and execute.