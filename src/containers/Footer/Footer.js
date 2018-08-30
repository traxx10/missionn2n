import React, { Component } from 'react';
import { Row, Col, Layout, Icon } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { Link } from 'react-router-dom';
import Image from 'react-image';
import Facebook from '../../assets/icons/facebook.svg';
import Google from '../../assets/icons/google-plus.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Instagram from '../../assets/icons/instagram-logo.svg';
import styles from './Footer.module.scss';

const { Footer } = Layout;

class Footers extends Component {
    render() {
        return (
            <Footer className={styles.Footer}>
                <Row>
                    <Col 
                        xl={{ span: 8 }}
                        lg={{ span: 8 }} 
                        md={{ span: 8 }} 
                        sm={{ span: 24 }} 
                        xs={{ span: 24 }}>
                        <div className={styles.QuickLinks}>
                            <h3> QUICK LINKS </h3>
                            <br />
                            <Link className={styles.Link} to="/contact-us"> CONTACT US </Link>
                            <Link className={styles.Link} to="/what-we-do"> WHAT WE DO </Link>
                            <Link className={styles.Link} to="/events"> EVENTS </Link>
                        </div>
                    </Col>
                    <Col 
                        xl={{ span: 8 }}
                        lg={{ span: 8 }} 
                        md={{ span: 8 }} 
                        sm={{ span: 24 }} 
                        xs={{ span: 24 }}>
                        <div className={styles.Locations}>
                            <h3> LOCATIONS </h3>
                            <br />
                            <h4> ABUJA </h4>
                            <h5> 
                                10 Lingu crescent, off Aminu Kano Crescent,
                                Wuse 11
                            </h5>

                            <h4> AWKA </h4>
                            <h5> 
                                Your address in awka
                            </h5>
                        </div>
                    </Col>
                    <Col 
                        xl={{ span: 8 }}
                        lg={{ span: 8 }} 
                        md={{ span: 8 }} 
                        sm={{ span: 24 }} 
                        xs={{ span: 24 }}>
                        <div className={styles.Connect}>
                            <h3> Connect </h3>
                            <br />
                            <div className={styles.ConnectIcons}>
                                <a href="#">
                                    <div className={styles.Avatar}>
                                        <Image className={styles.Image} alt="n2nfacebook" src={[ Facebook ]} />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className={styles.Avatar}>
                                        <Image className={styles.Image} alt="n2ntwitter" src={[ Twitter ]} />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className={styles.Avatar}>
                                        <Image className={styles.Image} alt="n2ngoogle" src={[ Google ]} />
                                    </div>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/nation_2_nation/">
                                    <div className={styles.Avatar}>
                                        <Image className={styles.Image} alt="n2ninstagram" src={[ Instagram ]} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.FooterBottom}>
                    <Col
                       xl={{ span: 12 }} 
                       lg={{ span: 12 }}
                       md={{ span: 12 }}
                       sm={{ span: 24 }}
                       xs={{ span: 24 }}>
                       <a target="_blank" href="https://trinac.com.ng/">
                            <h3 className={styles.Trinac} style={{ textAlign: 'left' }} > DESIGNED BY TRINAC </h3>
                       </a>
                    </Col>
                    <Col
                       xl={{ span: 12 }} 
                       lg={{ span: 12 }}
                       md={{ span: 12 }}
                       sm={{ span: 24 }}
                       xs={{ span: 24 }}>
                       <h3 
                            style={{ textAlign: 'right' }} > <Icon type="copyright" style={{ paddingRight: '.5rem'}} /> 
                            COPYRIGHT 
                            <span style={{ color: '#2DBCBC' }}> N2N MISSION </span>. 
                            ALL RIGHTS RESERVED. </h3>
                    </Col>
                </Row>
            </Footer>
        )
    }
}

export default useShallowEqual(Footers);