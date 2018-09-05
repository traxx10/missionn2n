import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../../Footer/Footer';
import styles from './N2nMissions.module.scss';

class N2nMissions extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.N2nMissions}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> N2N MISSIONS </h1>
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
                                    <h3> N2N MISSIONS </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                        We take the gospel to the unreached and the unengaged people groups through planting 
                                        of churches where there is none and holistic mission. It is estimated 
                                        that over of the 7.2 billion people alive in the world today, 
                                        3.0 billion of them live in unreached people groups with little or no access to the 
                                        Gospel of Jesus Christ.
                                        Over 51 million souls are still beyond the reach of the Gospel which means that no church, 
                                        no missionary, no mission agency, no one has yet taken the responsibility to preach Jesus Christ.
                                        We demonstrate God's love by alleviating need and suffering of the poorest of the poor.
                                        Reaching them with the gospel only would make our impact incomplete. We are always armed
                                        with the gospel in one hand and with the provision of clothing, food, medical care and 
                                        other basic necessities of life in the other hand.
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

export default useShallowEqual(N2nMissions);