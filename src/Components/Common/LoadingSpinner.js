export default function LoadingSpinner() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        pointerEvents: 'all',
      }}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          border: '6px solid #ccc',
          borderTopColor: '#1da1f2',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      ></div>
      <p
        style={{
          marginTop: '15px',
          fontSize: '16px',
          color: '#1da1f2',
          fontWeight: '600',
        }}
      >
        Loading...
      </p>

      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
