import React from 'react';
import { Link } from 'react-router-dom'

function Errror() {
  return (
    <main className="error-page">
        <div className="error-container">
          <h1>Error page</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
  )
}

export default Errror;