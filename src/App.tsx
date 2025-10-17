import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedPage from './components/FeedPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/" element={<FeedPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
