import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../../Footer/Footer';
import styles from './ChurchMinistry.module.scss';

class ChurchMinistry extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.ChurchMinistry}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> CHURCH MINISTRY </h1>
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
                                    <h3> CHURCH MINISTRY </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                        We partner with churches, organizations and others to reach a world in
                                        need of spiritual and physical help. We assist churches design a discipleship
                                        plan and train as it concerns their need.
                                    </p>
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

export default useShallowEqual(ChurchMinistry);