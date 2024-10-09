/*
Question: Your application requires global state to manage user authentication status across multiple components. 
How would you implement this using the Context API?

Answer:
    * Use React.createContext to create a UserContext.
    * Use a UserProvider component to wrap the application and manage the authentication state.
    * Use useContext in child components to access the global user state.

*/

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <nav>
      {user ? (
        <div>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <span>Please log in</span>
      )}
    </nav>
  );
};

const App = () => (
  <UserProvider>
    <Navbar />
    {/* Other components */}
  </UserProvider>
);

export default App;