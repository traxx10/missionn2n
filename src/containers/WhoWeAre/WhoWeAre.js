import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './WhoWeAre.module.scss';

class WhoWeAre extends Component {
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
                        <div className={styles.WhoWeAre}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> WHO WE ARE </h1>
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
                                <p className={styles.Header}>
                                    We exist to glorify God and to make disciples of all nations towards
                                    to advancement of the Kingdom.
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
                                                We make disciples who make disciples. Teaching and modelling what is believed to be
                                                truth learnt while guiding other to do the same.
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
                                                God from nation to nation. Jesus taugh the disciples to pray that God's Kingdom
                                                would be established on earth and that God's will be done on earth.
                                                <br />
                                                <strong> Matt 6: 20 </strong>
                                                <br />
                                                Christ is coming again to take over the earth by force and to establish his
                                                perfect rule. God's Kingdom is increased by men and women who tap into the purpose
                                                that God has for them. We understand that our vision is part of a much bigger vision
                                                God's vision, and his great insight has become light upon our feet.
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
                                        then the people. God advised jesus to ask for the nations as his inheritance and the uttermost
                                        part of the earth as His possession. <strong> Psalm 2:8 </strong>
                                        The Lord jesus advises us to ask for the same thing.
                                        <br />
                                        It is not at all the Lord's will that we carried forever on eagle's wings. We are to grow to the
                                        stature of the fullness of Christ. God wants sons who can represent Him throughout generations,
                                        just as the Lord Jesus and his first disciples represent Him. He is not looking forward to an eternity
                                        with babes in Christ who are still fed with milk but spiritually matured and sons for the fulfilling 
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
                                        makers and transformational leaders for the advancement of the kingdom until Jesus comes.
                                    </p>
                                </div>
                            </div>
                        </div>
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

export default useShallowEqual(WhoWeAre);