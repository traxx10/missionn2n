import React, { Component } from 'react';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { Link } from 'react-router-dom';
import { Row, Col, Carousel, Button } from 'antd';
import styles from './HomeHeader.module.scss';

class HomeHeader extends Component {
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Carousel autoplay className={styles.Carousel} >
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
                        {/* <div className={styles.ImageContainer2}>
                            <div className={styles.Text}>
                                <div className={styles.TextContainer}>
                                    <h1> LUMINARIES </h1>
                                    <h3> <i> August 29-31 </i> </h3>
                                </div>
                                <Button className={styles.Button}>
                                    <a href="/events" className={styles.Link}> MORE EVENTS </a>
                                </Button>
                            </div>
                        </div> */}
                    </Carousel>
                </Col>
            </Row>
        )
    }
}

export default useShallowEqual(HomeHeader);