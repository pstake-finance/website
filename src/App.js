import React, {useState, useEffect} from "react";
import {Route, Switch, withRouter, useLocation} from "react-router-dom";
import ReactGA from 'react-ga';
// import offline from "./assets/offline.svg";
import './css/style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { ANALYTICS } from "./constants/config";
import RouteNotFound from './components/RouteNotFound';
import HomePage from './pages/homePage';
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
ReactGA.initialize(ANALYTICS)
const trackPage = page => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };
const App = () => {
  const routes = [{
      path: '/',
      component: HomePage,
  },{
      path: '/terms',
      component: Terms,
  },{
      path: '/privacy',
      component: Privacy,
  }];

  const [isOnline, setNetwork] = useState(window.navigator.onLine);
  const updateNetwork = () => {
      setNetwork(window.navigator.onLine);
  };
  useEffect(() => {
      window.addEventListener("offline", updateNetwork);
      window.addEventListener("online", updateNetwork);
      document.body.classList = "";
  document.getElementById('nav-bar').classList.add('navbar-white');
      return () => {
          window.removeEventListener("offline", updateNetwork);
          window.removeEventListener("online", updateNetwork);
      };
  });
  let location = useLocation();

  useEffect(() => {
      const page = location.pathname;
      console.log(page)
      document.body.classList.add('is-loaded')
      trackPage(page);
  }, [location]);
  return (
      <>
          {
              !isOnline ?
                  <div className="network-check">
                      {/* <div className="center">
                          <img src={offline} alt="offline"/>
                          <p>Network Disconnected. Check your data or wifi connection.</p>
                      </div> */}
                  </div>
                  : ""
          }
          <div className="container-fluid app-nav">
              <div className="container">
                  <Header/>
              </div>
          </div>

          <Switch>
              {
                  routes.map((route) =>
                      <Route
                          key={route.path}
                          exact
                          component={route.component}
                          path={route.path}/>,
                  )
              }

              <Route component={RouteNotFound}/>
          </Switch>
      </>

  );
}

export default withRouter(App);



