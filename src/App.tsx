import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import UserList from './components/UserList';
import './App.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Loading /> : <UserList />}
    </div>
  );
};

export default App;
