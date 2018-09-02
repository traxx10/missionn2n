import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../../Footer/Footer';
import styles from './EveryChildCount.module.scss';

class EveryChildCount extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.EveryChildCount}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> EVERY CHILD COUNT </h1>
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
                                    <h3> EVERY CHILD COUNT </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                        We help the less privileged children get a life. We do this by providing financial assistance for their education and health services. 
                                        The time to act is now. For unless we accelerate our progress almost 70 million children may die before 2030, 
                                        3.2 million in 2030 alone. 
                                        Children in sub-Saharan Africa will be 10 times more likely to die before their fifth birthdays than children in high-income countries, 
                                        nine out of 10 children in Africa. More than ever, we should recognize that development is to be carried on – sustained – by future 
                                        generations. When we help a boy access the medicine and nutrition he needs to be healthy and strong, we not only increase his chances in life, 
                                        we are providing a safe place for our society.
                                        When we educate a girl, we not only give her the tools and knowledge to own decisions and shape her own future, 
                                        we also help raise the standard of living of her family and her community.
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

export default useShallowEqual(EveryChildCount);