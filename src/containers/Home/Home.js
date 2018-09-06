import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions';
import _ from 'lodash';
import Footer from '../Footer/Footer';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeWhoWeAre from '../../components/HomeWhoWeAre/HomeWhoWeAre';
import HomeGetInvolved from '../../components/HomeGetInvolved/HomeGetInvolved';
import styles from './Home.module.scss';

class Home extends Component {
    componentWillMount() {
        this.props.fetchEvents();

    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <HomeHeader events={this.props.events} />
                        <HomeWhoWeAre />
                        <HomeGetInvolved />
                    </Col>
                </Row>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const events = _.map(state.EventsReducer.events, (val, uid) => {
        return { ...val, uid }
    })

    return {
        loading: state.EventsReducer.loading,
        events,
    }
}

export default connect(mapStateToProps, { fetchEvents })(useShallowEqual(Home));