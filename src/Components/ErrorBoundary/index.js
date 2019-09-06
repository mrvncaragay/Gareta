import React, { Component } from 'react';

// Error styles component
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './styles';

// Wrap children with ErrorBoundary component to catch any error that might occur during asyn call etc...
// Lazy load and suspense (fallback) will not know if any occurs during children rendering therefore will continue to show loading state.
class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
    // process the error
    return {
      hasErrored: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
          <ErrorImageText>Sorry this page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
