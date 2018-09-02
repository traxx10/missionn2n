import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../../Footer/Footer';
import styles from './N2nPrayer.module.scss';

class N2nPrayer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.N2nPrayer}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> N2N PRAYER </h1>
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
                                    <h3> N2N PRAYER </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                        This is the time for great intercession. Our house or community
                                        must be a house for prayer.
                                        We must go on our Knees for all nations.
                                        The only way to get the world ready for the second coming of
                                        Christ is through intercession.
                                        Fervent faith-filled intercession is the spiritual climate of every movement.
                                        We gather in different locations to intercede for nations, communities, leaders,
                                        youth, families, churches and ministries.
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

export default useShallowEqual(N2nPrayer);