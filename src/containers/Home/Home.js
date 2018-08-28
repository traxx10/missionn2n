import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeWhoWeAre from '../../components/HomeWhoWeAre/HomeWhoWeAre';
import HomeGetInvolved from '../../components/HomeGetInvolved/HomeGetInvolved';
import styles from './Home.module.scss';

class Home extends Component {
    state = {
        loading: true,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 3000)
    }

    renderComponent = () => {
        if(this.state.loading) {
            return (
                <div className={styles.Loading}>
                    <Icon style={{ color: '#2DBCBC', fontSize: '5rem' }} type="loading" />
                </div>
            )
        } else if(this.state.loading === false) {
            return (
                <Row>
                    <Col span={24}>
                        <HomeHeader />
                        <HomeWhoWeAre />
                        <HomeGetInvolved />
                    </Col>
                </Row>
            )
        }
    }

    render() {
        return (
            this.renderComponent()
        )
    }
}

export default useShallowEqual(Home);