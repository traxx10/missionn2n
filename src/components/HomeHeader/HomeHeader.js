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
                                    <h1> WELCOME TO N2N MISSION </h1>
                                    <h3> <i> Your tagline </i> </h3>
                                </div>
                                <Button className={styles.Button}>
                                    <a href="/who-we-are" className={styles.Link}> READ MORE </a>
                                </Button>
                            </div>
                        </div>
                        <div className={styles.ImageContainer2}>
                            <div className={styles.Text}>
                                <div className={styles.TextContainer}>
                                    <h1> LUMINARIES </h1>
                                    <h3> <i> August 29-31 </i> </h3>
                                </div>
                                <Button className={styles.Button}>
                                    <a href="/events" className={styles.Link}> MORE EVENTS </a>
                                </Button>
                            </div>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        )
    }
}

export default useShallowEqual(HomeHeader);