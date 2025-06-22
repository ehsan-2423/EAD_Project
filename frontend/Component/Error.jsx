import '../ComponentStyling/Error.css';

function Error() {
  return (
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <p className="error-subtext">The page you're looking for doesn't exist or has been moved.</p>
      </div>
    </div>
  )
}

export default Error