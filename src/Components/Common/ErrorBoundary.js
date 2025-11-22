import React from 'react';
import Swal from 'sweetalert2';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            textAlign: 'center',
            padding: '100px 20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              maxWidth: '500px',
            }}
          >
            <h1 style={{ fontSize: '48px', color: '#fe0d0d', marginBottom: '20px' }}>
              ⚠️ Oops!
            </h1>
            <p style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>
              Something went wrong
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '30px' }}>
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={this.handleReset}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#fe0d0d',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#e4280f')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#fe0d0d')}
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
