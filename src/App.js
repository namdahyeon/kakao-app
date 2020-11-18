import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import Friends from './routes/Friends';
import Profile from './routes/Profile';
import Chats from './routes/Chats';
import Chat from './routes/Chat';
import Find from './routes/Find';
import More from './routes/More';
import Navigation from './components/Navigation';


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Friends} />
      <Route path="/profile" component={Profile} />
      <Route path="/chats" component={Chats} />
      <Route path="/chat" component={Chat} />
      <Route path="/find" component={Find} />
      <Route path="/more" component={More} />
    </HashRouter>
  );
}

export default App;
