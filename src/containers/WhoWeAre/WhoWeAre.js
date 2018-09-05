import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { connect } from 'react-redux';
import { leadForm, clearLeadForm } from '../../actions';
import Image from 'react-image';
import President from '../../assets/president.jpg';
import Roseline from '../../assets/roseline.jpg';
import LeadForm from '../../components/LeadForm/LeadForm';
import Footer from '../Footer/Footer';
import styles from './WhoWeAre.module.scss';

class WhoWeAre extends Component {
    componentWillMount() {
        this.props.clearLeadForm();
    }

    componentWillUnmount() {
        this.props.clearLeadForm();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.WhoWeAre}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> WHO WE ARE </h1>
                                        <div className={styles.titleLine}>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Body}>
                                <p className={styles.Header}>
                                    We exist to glorify God and to make disciples of all nations towards
                                    to advancement of the Kingdom of God.
                                </p>
                                <div className={styles.Row}>
                                    <Row>
                                        <Col
                                        xl={{ span: 6 }}
                                        lg={{ span: 6 }}
                                        md={{ span: 6 }}
                                        sm={{ span: 24}}
                                        xs={{ span: 24}}>
                                            <h3> GLORIFY GOD </h3>
                                            <div className={styles.titleLine}>
                                                <hr />
                                            </div>
                                        </Col>
                                        <Col 
                                        xl={{ span: 18}}
                                        lg={{ span: 18}}
                                        md={{ span: 18}}
                                        sm={{ span: 24}}
                                        xs={{ span: 24 }}>
                                            <p>
                                                We bring people into a better relationship with God so that God would be glorified.
                                                To Glorify God means to worship and serve him.
                                                Our Burning passion is to see 
                                                <strong> "every nation, tribe, people and language" </strong> together worshipping 
                                                the lamb.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.Row}>
                                    <Row>
                                        <Col
                                        xl={{ span: 6 }}
                                        lg={{ span: 6 }}
                                        md={{ span: 6 }}
                                        sm={{ span: 24}}
                                        xs={{ span: 24}}>
                                            <h3> MAKE DISCIPLES OF ALL NATIONS </h3>
                                            <div className={styles.titleLine}>
                                                <hr />
                                            </div>
                                        </Col>
                                        <Col 
                                        xl={{ span: 18}}
                                        lg={{ span: 18}}
                                        md={{ span: 18}}
                                        sm={{ span: 24}}
                                        xs={{ span: 24 }}>
                                            <p>
                                                We make disciples who make disciples teaching and modelling what is believed to be
                                                truth learnt while guiding others to do the same.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.Row}>
                                    <Row>
                                        <Col
                                        xl={{ span: 6 }}
                                        lg={{ span: 6 }}
                                        md={{ span: 6 }}
                                        sm={{ span: 24}}
                                        xs={{ span: 24}}>
                                            <h3> ADVANCE THE KINGDOM OF GOD </h3>
                                            <div className={styles.titleLine}>
                                                <hr />
                                            </div>
                                        </Col>
                                        <Col 
                                        xl={{ span: 18}}
                                        lg={{ span: 18}}
                                        md={{ span: 18}}
                                        sm={{ span: 24}}
                                        xs={{ span: 24 }}>
                                            <p>
                                                We advance the Kingdom of God, countering satan's rule over nations and 
                                                bringing people into their inheritance. The Kingdom of God was initiated
                                                at the first advent of Christ. We are on a mission to advance the kingdom of
                                                God from nation to nation. Jesus taught the disciples to pray that God's Kingdom
                                                would be established on earth and that God's will be done on earth.
                                                <br />
                                                <strong> Matt 6: 20 </strong>
                                                <br />
                                                Christ is coming again to take over the earth by force and to establish his
                                                perfect rule. God's Kingdom is increased by men and women who tap into the purpose
                                                that God has for them. We understand that our vision is part of a much bigger vision
                                                God's vision, and his great insight has become the light upon our feet.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.Goal}>
                                    <h3> OUR GOAL </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>

                                    <p>
                                        Our goal is to bring men into their inheritance. Our inheritance is first God and
                                        then the people. God advised Jesus to ask for the nations as his inheritance and the uttermost
                                        part of the earth as His possession <strong> Psalm 2:8. </strong>
                                        The Lord Jesus advises us to ask for the same thing.
                                        <br />
                                        It is not at all the Lord's will that we carried forever on eagle's wings. We are to grow to the
                                        stature of the fullness of Christ. God wants sons who can represent Him throughout generations
                                        just as the Lord Jesus and his first disciples represented Him. He is not looking forward to an eternity
                                        with babes in Christ who are still fed with milk but spiritually matured sons for the fulfilling 
                                        of the numerous roles and tasks of the Kingdom.
                                    </p>
                                </div>
                                <div className={styles.Vision}>
                                    <h3> OUR VISION </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                        To establish a transformational sustainable platform that will keep raising disciple
                                        makers and transformational leaders for the advancement of the kingdom of God until Jesus comes.
                                    </p>
                                </div>

                                <div className={styles.Leaders}>
                                    <h3> OUR LEADERS </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <Row>
                                        <Col span={24}>
                                            <Row>
                                                <Col
                                                xl={{ span: 12 }}
                                                lg={{ span: 12 }}
                                                md={{ span: 12 }}
                                                sm={{ span: 24 }}
                                                xs={{ span: 24 }}
                                                style={{ marginBottom: '4rem' }}>
                                                    {/* <div className={styles.ImageContainer}> */}
                                                        <Image className={styles.Image} src={[ President, President ]} />
                                                        <h2 style={{ marginTop: '1rem', marginBottom: '0' }}> UCHE ONUBIYI </h2>
                                                        <h2 style={{ fontWeight: '100', margin: 'auto' }}> President </h2>
                                                    {/* </div> */}
                                                </Col>
                                                <Col
                                                xl={{ span: 12 }}
                                                lg={{ span: 12 }}
                                                md={{ span: 12 }}
                                                sm={{ span: 24 }}
                                                xs={{ span: 24 }}
                                                style={{ marginBottom: '4rem' }}>
                                                    {/* <div className={styles.ImageContainer}> */}
                                                        <Image className={styles.Image} src={[ Roseline, Roseline ]} />
                                                        <h2 style={{ marginTop: '1rem', marginBottom: '0' }}> Roseline Eigenmann </h2>
                                                        <h2 style={{ fontWeight: '100', margin: 'auto' }}> National Coordinator Zurich, Switzerland </h2>
                                                    {/* </div> */}
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>

                                <div className={styles.Platform}>
                                    <h3> OUR PLATFORM </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                   <Row gutter={50}>
                                       <Col 
                                        lg={{ span: 12 }}
                                        xl={{ span: 12 }}
                                        md={{ span: 12 }}
                                        sm={{ span: 24 }}
                                        xs={{ span: 24 }}>
                                            <div className={styles.Lead}>
                                                <h2> THE L. E. A. D System  </h2>
                                                <p>
                                                    N2N <strong> Leadership Empowerment And Development </strong>
                                                    system is a sustainable and multiplying discipleship. 
                                                    platform established to enable us accomplish our goal. 
                                                    It consist of small groups located on every college, 
                                                    every campus and every community through which we reach, 
                                                    teach, model, and mentor with Bible truth. 
                                                    It is an avenue for guiding people to discover their divine purpose, 
                                                    identify their potential and pursue it with passion. We have a pool of trainings and 
                                                    activities ranging from Bible studies, outreaches,  socials, workshops, conferences, 
                                                    leadership and discipleship trainings, ministry and missions, health/fitness and nutrition, 
                                                    career development to entrepreneurship and skill acquisitions. 
                                                    Our primary purpose is to raise disciple makers and generational 
                                                    leaders for Christ who will make eternal impact in their colleges, 
                                                    campuses, communities and nations toward the advancement of the Kingdom of God.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col 
                                        lg={{ span: 12 }}
                                        xl={{ span: 12 }}
                                        md={{ span: 12 }}
                                        sm={{ span: 24 }}
                                        xs={{ span: 24 }}>
                                            <div className={styles.Requirements}>
                                                <h2> 
                                                    Want to start a LEAD group in your community, 
                                                    campus or college? You must meet the following requirements: 
                                                </h2>
                                                <ul>
                                                    <li> You must be born again with the passion to impact lives.  </li>
                                                    <li> You must be filled with the Holy Ghost, tongue talking and living under His influence.  </li>
                                                    <li> You must be hungry for the word of God looking to change as you increase in knowledge. <strong> 1 Peter 2: 2 </strong> </li>
                                                    <li> You must be a person of prayer. <strong> Colossians 4: 2 </strong>  </li>
                                                    <li> You must be of a loyal heart, teachable and open to new ideas. </li>
                                                    <li> You must know how to work and walk in love putting others first. </li>
                                                    <li> You must be a visionary able to see and plan into the future and as well mobilise others to go along with you. </li>
                                                    <li> You must understand your call as a disciple maker and leader of change .  </li>
                                                    <li> You must have track record of leadership and soul winning.   </li>
                                                    <li> You must be ready to attend our training programme after meeting the above requirements.  </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <LeadForm loading={this.props.loading} sent={this.props.sent} message={this.props.message} leadForm={this.props.leadForm}/>
                                        </Col>
                                    </Row>
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
        loading: state.LeadFormReducer.loading,
        message: state.LeadFormReducer.message,
        sent: state.LeadFormReducer.sent,
    }
}

export default connect(mapStateToProps, { leadForm, clearLeadForm })(useShallowEqual(WhoWeAre));