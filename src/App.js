import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import TopHeader from './containers/TopHeader/TopHeader';
import Async from './Hoc/AsyncComponent';

const { Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
        <Layout>
            <Content>
              <TopHeader />
            </Content>
        </Layout>
    )
  }
}

export default withRouter(App);
