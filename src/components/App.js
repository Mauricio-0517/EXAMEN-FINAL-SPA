import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from '../views/Home'
import About from '../views/About'
import Dashbord from '../views/Dashbord'

function App() {
  return (
    
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/dashbord" component={Dashbord} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
