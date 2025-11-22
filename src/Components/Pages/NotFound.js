import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

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
        <h1 style={{ fontSize: '64px', color: '#fe0d0d', marginBottom: '10px' }}>
          404
        </h1>
        <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
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
            marginRight: '10px',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#e4280f')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#fe0d0d')}
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: '12px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#1da1f2',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0c8ae4')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#1da1f2')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
