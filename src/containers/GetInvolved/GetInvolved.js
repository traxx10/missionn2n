import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../Footer/Footer';
import styles from './GetInvolved.module.scss';

class GetInvolved extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.GetInvolved}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> GET INVOLVED </h1>
                                        <div className={styles.titleLine}>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className={styles.TextContainer}>
                                        <h1> ONE MINISTRY </h1>
                                        <h3> PRAY, GO AND GIVE! </h3>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Involved}>
                                <div className={styles.Header}>
                                    <h3> PRAY </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                        Intercede and stand in faith with us as we believe God for more opportunities
                                        to bring the Gospel to the nations.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.Involved}>
                                <div className={styles.Header}>
                                    <h3> GIVE </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                        Partner with us financially in seeing God's Kingdom advance to the ends of the earth.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.Involved}>
                                <div className={styles.Header}>
                                    <h3> GO </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                    Join us in fulfilling God's call to reach all nations with the Gospel of Christ.
                                    Figure out your role and how you can get involved and then find ways to come join us
                                    as we get men ready from nation to nation.
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

export default useShallowEqual(GetInvolved);