import React, { Component } from 'react';
import { Row, Col, Icon, Card } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { fetchEvents } from '../../actions';
import { BarLoader } from 'react-css-loaders';
import Img from 'react-image';
import CalenderIcon from '../../assets/icons/calender.svg';
import Footer from '../Footer/Footer';
import _ from 'lodash';

import styles from './Events.module.scss';

class Events extends Component {

    componentDidMount() {
        this.props.fetchEvents();
    }

    showEvents = () => {
        if(this.props.loading) {
            return (
                <div className={styles.Loader}>
                    <BarLoader style={{ margin: '4rem' }} color="#ff00cc" size={7} />
                </div>
            )
        } else if(this.props.loading === false) {
            function shorten(str, maxLen, separator = ' ') {
                if (str.length <= maxLen) return str;
                return str.substr(0, str.lastIndexOf(separator, maxLen));
            }

            const mapEvents = this.props.events.map((event) => {
                return (
                    <Col
                        key={event.uid}
                        xl={{ span: 8 }}
                        lg={{ span: 8 }}
                        md={{ span: 12 }}
                        sm={{ span: 24 }}
                        xs={{ span: 24 }}>
                        <Card bordered={false} bodyStyle={bodyStyle.cardStyle} className={styles.Card}>
                            <Img 
                                loader={ <Icon style={{ 
                                    color: '#ff00cc', 
                                    fontSize: '2rem',
                                    display: 'flex',
                                    marginBottom: '1.5rem',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                     }} type="loading" /> } 
                                src={event.header_image_url} 
                                className={styles.Img} />
                            <div className={styles.Header}>
                                <Row gutter={24}>
                                    <Col span={8}>
                                        <Img src={[ CalenderIcon, CalenderIcon ]} />
                                    </Col>
                                    <Col span={16}>
                                        <h2> {event.date} </h2>
                                        <p> {event.location} </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.CardBody}>
                                <h1> {event.title} </h1>
                                <h3> {event.tag_line} </h3>
                                <p style={{ marginBottom: '1rem'}} > {shorten(event.details, 120)} </p>
                                <Link to={{
                                    pathname: `/events/${event.uid}`,
                                    state: { eventDetail: event }
                                }} > View Details </Link>
                            </div>
                        </Card>
                    </Col>
                )
            })
            
            return(
                <Row gutter={24}>
                    {mapEvents}
                </Row>
            )
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.Events}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> EVENTS </h1>
                                        <div className={styles.titleLine}>
                                            <hr />
                                        </div>
                                    </div>
                                    {/* <div className={styles.TextContainer}>
                                        <h1> ONE MINISTRY </h1>
                                        <h3> PRAY, GO AND GIVE! </h3>
                                    </div> */}
                                </div>
                            </div>
                            {this.showEvents()}
                        </div>
                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
}

const bodyStyle = {
    cardStyle : {
        backgroundColor: 'rgba(239, 239, 239, 0.5)'
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

export default withRouter(connect(mapStateToProps, { fetchEvents })(useShallowEqual(Events)));