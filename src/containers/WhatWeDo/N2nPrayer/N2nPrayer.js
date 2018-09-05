import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { connect } from 'react-redux';
import { prayerRequest, clearPrayerRequestForm } from '../../../actions';
import PrayerRequestForm from '../../../components/PrayerRequestForm/PrayerRequestForm';
import Footer from '../../Footer/Footer';
import styles from './N2nPrayer.module.scss';

class N2nPrayer extends Component {
    componentWillMount() {
        this.props.clearPrayerRequestForm();
    }

    componentWillUnmount() {
        this.props.clearPrayerRequestForm();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.N2nPrayer}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> N2N PRAYER NETWORK </h1>
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
                            <div className={styles.Body}>
                                <div className={styles.Header}>
                                    <h3> N2N PRAYER </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                        This is the time for great intercession.
                                        We must go on our Knees for all nations.
                                        The only way to get the world ready for the second coming of
                                        Christ is through intercession.
                                        Fervent faith-filled intercession is the spiritual climate of every movement.
                                        We gather in different locations to intercede for nations, communities, leaders,
                                        youth, families, churches and ministries.
                                    </p>
                                    <p> 
                                        if you need a prayer partner to agree with in prayer for anything 
                                        including your ministry please call 
                                        <strong style={{ color: '#2DBCBC' }}> +2348037025570 </strong> or submit your prayer request
                                    </p>
                                    <PrayerRequestForm message={this.props.message} sent={this.props.sent} loading={this.props.loading} prayerRequest={this.props.prayerRequest} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.PrayerNetworkReducer.message,
        loading: state.PrayerNetworkReducer.loading,
        sent: state.PrayerNetworkReducer.sent,
    }
}

export default connect(mapStateToProps, { prayerRequest, clearPrayerRequestForm })(useShallowEqual(N2nPrayer));