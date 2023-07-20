import React from "react";

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedSTateFromError() {
    this.setState({ hasError: true });
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error boundary error", error);

    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Some error occur</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
