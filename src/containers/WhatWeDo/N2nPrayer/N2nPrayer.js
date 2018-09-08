import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { connect } from 'react-redux';
import { prayerRequest, clearPrayerRequestForm, toggleModalPrayerRequest, toggleModalMember, memberRequest } from '../../../actions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PrayerRequestForm from '../../../components/PrayerRequestForm/PrayerRequestForm';
import PrayerMembership from '../../../components/PrayerMembership/PrayerMembership';
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
                                            God's urgent concern is for the Church to complete the task of evangelism. 
                                            The return of our Lord Jesus Christ will be delayed until every tribe, language, 
                                            and nation has heard the good news of the Kingdom of God. 
                                            God does not want to lose any of his child
                                            And for God to accomplish his vision, he has called us into partnership. 
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
                                    <Row>
                                        <Col span={3}/>
                                        <Col xl={{ span: 18 }}
                                            lg={{ span: 18 }}
                                            md={{ span: 18 }}
                                            sm={{ span: 24 }}
                                            xs={{ span: 24}}>
                                            <Button 
                                            onClick={() => this.props.toggleModalPrayerRequest(this.props.prayerRequestForm)} className={styles.Btn} type="primary" size="large"> SEND PRAYER REQUEST </Button>
                                            <p style={{ textAlign: 'center', fontSize: '1.8rem', margin: '1rem' }}> OR </p>
                                            <Button 
                                            onClick={() => this.props.toggleModalMember(this.props.membershipRequest)}
                                            className={styles.Btn} size="large"> JOIN PRAYER NETWORK </Button>
                                        </Col>
                                        <Col span={3}/>
                                    </Row>
                                    <Modal
                                    onOk={() => this.props.toggleModalPrayerRequest(this.props.prayerRequestForm)}
                                    onCancel={() => this.props.toggleModalPrayerRequest(this.props.prayerRequestForm)}
                                     visible={this.props.prayerRequestForm} > 
                                        <PrayerRequestForm 
                                        message={this.props.message} 
                                        sent={this.props.sent} 
                                        loading={this.props.loading} 
                                        prayerRequest={this.props.prayerRequest} />
                                    </Modal>
                                    <Modal 
                                    onOk={() => this.props.toggleModalMember(this.props.membershipRequest)}
                                    onCancel={() => this.props.toggleModalMember(this.props.membershipRequest)}
                                    visible={this.props.membershipRequest}> 
                                        <PrayerMembership 
                                        message={this.props.memberMessage} 
                                        sent={this.props.memberSent} 
                                        loading={this.props.memberLoading} 
                                        prayerRequest={this.props.memberRequest}
                                        />
                                    </Modal>
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
        memberMessage: state.PrayerNetworkReducer.memberMessage,
        loading: state.PrayerNetworkReducer.loading,
        memberLoading: state.PrayerNetworkReducer.memberLoading,
        sent: state.PrayerNetworkReducer.sent,
        memberSent: state.PrayerNetworkReducer.memberSent,
        prayerRequestForm: state.PrayerNetworkReducer.prayerRequest,
        membershipRequest: state.PrayerNetworkReducer.membershipRequest,
    }
}

export default connect(mapStateToProps, 
    { prayerRequest, 
        toggleModalPrayerRequest,
        toggleModalMember,
        memberRequest,
        clearPrayerRequestForm })(useShallowEqual(N2nPrayer));