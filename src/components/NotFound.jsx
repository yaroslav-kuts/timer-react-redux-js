import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      Page Not Found!
      <div className="to-main-link">
        <Link to="/main/log">
          GO TO MAIN
        </Link>
      </div>
    </div>
  );
}
