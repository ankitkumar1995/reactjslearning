import React from "react";

class ErrorBoundaryOth extends React.Component {
 constructor(){
    super();
    this.state={hasError:false}
 }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    this.setState({hasError:true})
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryOth
