import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { Row, Col, Button } from 'antd';
import styles from './HomeWhoWeAre.module.scss';

class HomeWhoWeAre extends Component {
    render() {
        return (
            <Row style={{ backgroundColor: '#fff' }} >
                <Col span={24}>
                    <div className={styles.HomeWhoWeAre}>
                        <div className={styles.Header}>
                            <h1> WHO WE ARE </h1>
                            <div className={styles.titleLine}>
                                <hr />
                            </div>
                        </div>
                        <div className={styles.Body}>
                            <p> 
                                We exist to glorify God and to make disciples of all nations towards
                                to advancement of the Kingdom.
                                We bring people into proper relationship with God so that God will be glorified.
                                To Glorify God means to serve and worship him.
                            </p>
                            <Button className={styles.Button}>
                                <Link to="/what-we-do" className={styles.Link}> READ MORE </Link>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default useShallowEqual(HomeWhoWeAre);