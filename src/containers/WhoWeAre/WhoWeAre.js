import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import BannerImage from '../../assets/who-we-are.jpg';
import Image from 'react-image';
import styles from './WhoWeAre.module.scss';

class WhoWeAre extends Component {
    render() {
        return (
            <Row style={{ backgroundColor: '#fff' }} >
                <Col span={24}>
                    <div className={styles.WhoWeAre}>
                        <div className={styles.Banner} >
                            <Image className={styles.Image} src={[ BannerImage, BannerImage ]}/>
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
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default useShallowEqual(WhoWeAre);