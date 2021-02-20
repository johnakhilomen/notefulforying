import React from "react";
import ReactDOM from "react-dom";

const ErrorComponent = () => {
  return <h1>Something went wrong</h1>;
};

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" }
  };

  static getDerivedStateFromError = error => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    console.log(error, info);
    console.log("haserror", hasError, error, info)
    const { children } = this.props;
    return hasError ? <ErrorComponent /> : children;
  }
}