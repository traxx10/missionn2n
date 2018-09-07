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
                                    <Row>
                                        <Col span={3}/>
                                        <Col xl={{ span: 18 }}
                                            lg={{ span: 18 }}
                                            md={{ span: 18 }}
                                            sm={{ span: 24 }}
                                            xs={{ span: 24}}>
                                            <p>
                                            {/* This is the time for great intercession.
                                            We must go on our Knees for all nations.
                                            The only way to get the world ready for the second coming of
                                            Christ is through intercession.
                                            Fervent faith-filled intercession is the spiritual climate of every movement.
                                            We gather in different locations to intercede for nations, communities, leaders,
                                            youth, families, churches and ministries. */}
                                            God's urgent concern is for the Church to complete the task of evangelism. 
                                            The return of our Lord Jesus Christ will be delayed until every tribe, language, 
                                            and nation has heard the good news of the Kingdom of God. God does not want to lose any of anyone. 
                                            And God to this vision, he has called us to partnership. 
                                            Preparation must go ahead of evangelism. 
                                            There is no genuine harvest of souls without fervent intercession. 
                                            Prayer must saturate the work of reaching the nations for Christ. 
                                            Not everybody can go or give financially but everybody can pray. 
                                            When you pray for souls in every nation, 
                                            you are advancing the Kingdom of God. 
                                            <br />
                                            Kingdom advancement is our priority because it is our main assignment as 
                                            true citizens of the Kingdom of God. 
                                            The will of our kingdom must prevail in the nations. 
                                            We will pray for the Church until we are set above the nations. 
                                            The will of our Lord God must be done in earth as it is in heaven. 
                                            And it is only when we join hands together all over the world 
                                            in red hot fervent prayer that tremendous power can be made available enough to cause souls, 
                                            nations and the world powers to bow to Christ. 
                                        </p>
                                        <p>
                                            Through prayer you can join our team as we go from nation to Nation for harvest. 
                                            To join our network, pls fill out the form below.
                                        </p>
                                        <p> 
                                            if you need a prayer partner to agree with in prayer for anything 
                                            including your ministry please call 
                                            <strong style={{ color: '#2DBCBC' }}> +2348037025570 </strong> or submit your prayer request
                                        </p>
                                        </Col>
                                        <Col span={3}/>
                                    </Row>
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