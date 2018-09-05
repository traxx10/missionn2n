import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TopHeader from './containers/TopHeader/TopHeader';
import firebase from 'firebase';
import Async from './Hoc/AsyncComponent';
import styles from './App.module.scss';

const { Content } = Layout;

var config = {
  apiKey: "AIzaSyCyIms3kHCZZVVSYESU4o-wd3AQ9kHMFb8",
  authDomain: "missionn2n.firebaseapp.com",
  databaseURL: "https://missionn2n.firebaseio.com",
  projectId: "missionn2n",
  storageBucket: "missionn2n.appspot.com",
  messagingSenderId: "968888295857"
};

firebase.initializeApp(config);


const Home = Async(() => {
  return import('./containers/Home/Home');
});

const Events = Async(() => {
  return import('./containers/Events/Events');
});

const WhoWeAre = Async(() => {
  return import('./containers/WhoWeAre/WhoWeAre');
});

const GetInvolved = Async(() => {
  return import('./containers/GetInvolved/GetInvolved');
});

const N2nMissions = Async(() => {
  return import('./containers/WhatWeDo/N2nMissions/N2nMissions');
});

const ChurchMinistry = Async(() => {
  return import('./containers/WhatWeDo/ChurchMinistry/ChurchMinistry');
});

const N2nPrayer = Async(() => {
  return import('./containers/WhatWeDo/N2nPrayer/N2nPrayer');
});

const EveryChildCount = Async(() => {
  return import('./containers/WhatWeDo/EveryChildCount/EveryChildCount');
});

const ChurchPlanting = Async(() => {
  return import('./containers/WhatWeDo/ChurchPlanting/ChurchPlanting');
});

const ContactUs = Async(() => {
  return import('./containers/ContactUs/ContactUs');
});

const EventDetail = Async(() => {
  return import('./containers/Events/EventDetail');
})


class App extends Component {
  render() {
    return (
          <Layout>
              <Content>
                <TopHeader />
                <TransitionGroup>
                  <CSSTransition
                    key={this.props.location.key}
                    timeout={{ exit: 300, enter: 300 }}
                    classNames={{
                      enter: styles.Enter,
                      enterActive: styles.EnterActive,
                      exit: styles.Exit,
                      exitActive: styles.ExitActive
                    }}
                  >
                    <Switch location={this.props.location} >
                      <Route path="/" exact component={Home} />
                      <Route path="/events" exact component={Events} />
                      <Route path="/who-we-are" exact component={WhoWeAre} />
                      <Route path="/get-involved" exact component={GetInvolved} />
                      <Route path="/n2n-missions" exact component={N2nMissions} />
                      <Route path="/church-ministry" exact component={ChurchMinistry} />
                      <Route path="/n2n-prayer-network" exact component={N2nPrayer} />
                      <Route path="/every-child-count" exact component={EveryChildCount} />
                      <Route path="/church-planting" exact component={ChurchPlanting} />
                      <Route path="/contact-us" exact component={ContactUs} />
                      <Route path="/events/:id" exact component={EventDetail} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </Content>
          </Layout>
    )
  }
}

export default withRouter(App);
