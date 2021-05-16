import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './elements/Navbar'
import Sidebar from './elements/Sidebar'
import Footer from './elements/Footer'
import App from './pages/App'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Error from './pages/Error'
import {AppProvider} from './context'
import "aos/dist/aos.css"

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Navbar />
        <Sidebar />

        <Switch>
          <Route exact path='/'>
            <App />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/projects'>
            <Projects />
          </Route>

          <Route path="*"><Error /></Route>
        </Switch>

        <Footer />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

