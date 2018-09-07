import React, { Component } from 'react';
import { useShallowEqual } from 'shouldcomponentupdate-children';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col, Carousel, Button } from 'antd';
import styles from './HomeHeader.module.scss';

class HomeHeader extends Component {
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Carousel easing="ease-in" dots={false} autoplay={true} className={styles.Carousel} >
                        <div className={styles.ImageContainer}>
                            <div className={styles.Text}>
                                <div className={styles.TextContainer}>
                                    <h1 
                                        style={{    
                                                    fontSize: '5rem', 
                                                    marginBottom: '0',
                                                    paddingBottom: '0', 
                                                    fontWeight: '600'}}> WELCOME </h1>
                                    <h1
                                        style={{    
                                            fontSize: '2.5rem', 
                                            marginBottom: '0',
                                            paddingBottom: '0', 
                                            fontWeight: '300'}}
                                    > TO </h1>
                                    <h1
                                        style={{    
                                            fontSize: '3rem', 
                                            marginBottom: '.5rem',
                                            paddingBottom: '0', 
                                            fontWeight: '300'}}
                                    > NATION 2 NATION </h1>
                                    <span> <i> Every college.    Every campus.    Every community </i> </span>
                                </div>
                                <Button className={styles.Button}>
                                    <a href="/who-we-are" className={styles.Link}> READ MORE </a>
                                </Button>
                            </div>
                        </div>
                        <div className={styles.ImageContainer2}>
                            <div className={styles.Text}>
                                <div className={styles.TextContainer}>
                                    <h1> JOIN OUR PRAYER NETWORK </h1>
                                </div>
                                <Button className={styles.Button}>
                                    <a href="/n2n-prayer-network" className={styles.Link}> JOIN </a>
                                </Button>
                            </div>
                        </div>
                        <div className={styles.ImageContainer3}>
                            <div className={styles.Text}>
                                <div className={styles.TextContainer}>
                                    <h1> Habakkuk 2: 2 NKJV </h1>
                                    <p>
                                        <i>
                                        "Then the Lord... Said, write the vision, and make it plain on tablets, 
                                        that he may run who reads it."
                                        </i>
                                    </p>
                                </div>
                                {/* <Button className={styles.Button}>
                                    <Link smooth to='/#welcome' className={styles.Link}> CONTINUE </Link>
                                </Button> */}
                            </div>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        )
    }
}

export default useShallowEqual(HomeHeader);