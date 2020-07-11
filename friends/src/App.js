import React, { useState } from 'react';
import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// import components
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import Footer from "./components/Footer";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/">
        
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          {loggedIn ?
            <FriendsList />
          
            : ""
          }

          {/*<PrivateRoute exact path="/" component={FriendsList} />*/}
          <Footer />
          
          
        </Route>
      </header>
    </div>
  );
}

export default App;
