import './App.css';
import { NewsContextProvider } from './NewsContext';
import News from './News';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <NewsContextProvider>
      <Switch>
        <Route path='/'><News/></Route>
        <Route path='/education'><News/></Route>
        <Route path='/entertainment'><News/></Route>
        <Route path='/sports'><News/></Route>
        <Route path='/business'><News/></Route>
        <Route path='/technology'><News/></Route>
      </Switch>
    </NewsContextProvider>
    </Router>
  );
}

export default App;
