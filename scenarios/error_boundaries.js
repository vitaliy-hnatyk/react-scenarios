/*
Question: How would you implement error boundaries in your React application to catch 
and handle JavaScript errors in components?

Answer:
 * Use class components to create an Error Boundary using componentDidCatch and getDerivedStateFromError.
 * Wrap components that may throw errors with the Error Boundary component.

*/

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const BuggyComponent = () => {
  throw new Error("I crashed!");
};

const App = () => (
  <ErrorBoundary>
    <BuggyComponent />
  </ErrorBoundary>
);

export default App;