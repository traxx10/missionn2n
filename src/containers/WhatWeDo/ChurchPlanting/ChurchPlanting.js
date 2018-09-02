import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../../Footer/Footer';
import styles from './ChurchPlanting.module.scss';

class ChurchPlanting extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.ChurchPlanting}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> CHURCH PLANTING </h1>
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
                                    <h3> CHURCH PLANTING </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                       Our target is to plant discipleship centers where the fruits
                                       of envangelism and mission works are established and raised to spiritual maturity.
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

export default useShallowEqual(ChurchPlanting);