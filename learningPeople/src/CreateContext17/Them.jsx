import React, { createContext, useContext, useState } from "react";

// 1. Create the context
const ThemeContext = createContext();

// 2. Create a provider component
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "#eee",
          color: darkMode ? "#fff" : "#000",
          minHeight: "100vh",
          padding: "20px",
          transition: "all 0.3s ease"
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 3. Use the context in a child component
const ThemeToggler = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// 4. Final component
const ThemeExample = () => (
  <ThemeProvider>
    <ThemeToggler />
  </ThemeProvider>
);

export default ThemeExample;