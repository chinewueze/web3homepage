import React, { useState, useEffect } from "react";
import NavigationMenu  from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
// import { Helmet } from 'react-helmet';
import { Route, Switch, Link,} from 'react-router-dom';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`h-full ${isDarkMode ? 'bg-black' : 'bg-gray-100'}   `}>
      <NavigationMenu isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <Main isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

 
