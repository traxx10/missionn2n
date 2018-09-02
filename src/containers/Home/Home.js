import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../Footer/Footer';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeWhoWeAre from '../../components/HomeWhoWeAre/HomeWhoWeAre';
import HomeGetInvolved from '../../components/HomeGetInvolved/HomeGetInvolved';
import styles from './Home.module.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <HomeHeader />
                        <HomeWhoWeAre />
                        <HomeGetInvolved />
                    </Col>
                </Row>
                <Footer/>
            </div>
        )
    }
}

export default useShallowEqual(Home);