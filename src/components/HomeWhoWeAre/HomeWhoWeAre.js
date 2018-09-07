import React, { Component } from 'react';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { Row, Col, Button } from 'antd';
import styles from './HomeWhoWeAre.module.scss';

class HomeWhoWeAre extends Component {
    render() {
        return (
            <Row style={{ backgroundColor: '#fff' }} >
                <Col xl={{ span: 3}} lg={{ span: 3}} md={{ span: 3 }} sm={{ span: 24}} xs={{ span: 24}}/>
                <Col 
                    xl={{ span: 18 }}
                    lg={{ span: 18}}
                    md={{ span: 18 }}
                    sm={{ span: 24}}
                    xs={{ span: 24}}
                >
                    <div className={styles.HomeWhoWeAre}>
                        <div className={styles.Header}>
                            <h1> WHO WE ARE </h1>
                            <div className={styles.titleLine}>
                                <hr />
                            </div>
                        </div>
                        <div className={styles.Body}>
                            <p> 
                                N2N is an international faith Gospel mission. 
                                Out of the burning desire to be part of God's vision in 
                                preparing for the return of the king to the earth is why this cause 
                                was established.
                            </p>
                            <Button className={styles.Button}>
                                <a href="/who-we-are" className={styles.Link}> READ MORE </a>
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col xl={{ span: 3}} lg={{ span: 3}} md={{ span: 3 }} sm={{ span: 24}} xs={{ span: 24}}/>
            </Row>
        )
    }
}

export default useShallowEqual(HomeWhoWeAre);