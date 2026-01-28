// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import { GoogleOAuthProvider } from '@react-oauth/google';

// Access the variable from .env.local
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!GOOGLE_CLIENT_ID) {
  console.error("Missing VITE_GOOGLE_CLIENT_ID in .env.local");
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID || ""}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);