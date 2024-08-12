import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blog1 from './components/blog1';
import Blog2 from './components/blog2';
import Blog3 from './components/blog3';
import Blog4 from './components/blog4';


function App() {
  return (
    <Router>
      <Routes>
     
        <Route exact path="/" Component={Home} />
        <Route exact path="/Blog1" Component={Blog1} />
        <Route exact path="/Blog2" Component={Blog2} />
        <Route exact path="/Blog3" Component={Blog3} />
        <Route exact path="/Blog4" Component={Blog4} />
      </Routes>
    </Router>
  );
}

export default App;
