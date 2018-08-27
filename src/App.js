import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import { StyleRoot } from 'radium';
import TopHeader from './containers/TopHeader/TopHeader';
import Async from './Hoc/AsyncComponent';
import Footer from './containers/Footer/Footer';
const { Content } = Layout;

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

class App extends Component {
  render() {
    return (
        <StyleRoot>
          <Layout>
              <Content>
                <TopHeader />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/events" exact component={Events} />
                  <Route path="/who-we-are" exact component={WhoWeAre} />
                  <Route path="/get-involved" exact component={GetInvolved} />
                  <Route path="/n2n-missions" exact component={N2nMissions} />
                  <Route path="/church-ministry" exact component={ChurchMinistry} />
                  <Route path="/n2n-prayer-partners" exact component={N2nPrayer} />
                  <Route path="/every-child-count" exact component={EveryChildCount} />
                </Switch>
                <Footer />
              </Content>
          </Layout>
        </StyleRoot>
    )
  }
}

export default withRouter(App);
