import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import { StyleRoot } from 'radium';
import TopHeader from './containers/TopHeader/TopHeader';
import Async from './Hoc/AsyncComponent';

const { Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
        <StyleRoot>
          <Layout>
              <Content>
                <TopHeader />
              </Content>
          </Layout>
        </StyleRoot>
    )
  }
}

export default withRouter(App);
