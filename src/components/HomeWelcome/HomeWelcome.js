import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import Image from 'react-image';
import WelcomeImage from '../../assets/home_header.jpg';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './HomeWelcome.module.scss';

class HomeWelcome extends Component {
    render() {
        return (
            <Row >
                <Col xl={{ span: 3}} lg={{ span: 3}} md={{ span: 3 }} sm={{ span: 24}} xs={{ span: 24}}/>
                <Col 
                    xl={{ span: 18 }}
                    lg={{ span: 18}}
                    md={{ span: 18 }}
                    sm={{ span: 24}}
                    xs={{ span: 24}}
                >
                    <div className={styles.HomeWelcome}>
                        <div className={styles.Header}>
                            <h1> WELCOME </h1>
                            <div className={styles.titleLine}>
                                <hr />
                            </div>
                        </div>
                        <div className={styles.Body}>
                            {/* <Image className={styles.Image} src={[ WelcomeImage, WelcomeImage ]} /> */}
                            <p> 
                                <strong> Have you captured the Vision? </strong> <br />
                                <strong> <i> "Then the Lord... Said, write the vision, and make it plain on tablets, 
                                that he may run who reads it." </i> </strong> <strong> (Habakkuk 2: 2 NKJV) </strong>
                                The last command of Jesus Christ was for His disciples to go into the 
                                world and make disciples all nations. He also gives us the privilege and honour 
                                to join the greatest movement on earth, sharing the greatest news of the greatest 
                                soon - coming world - ruling, supernatural government of the greatest man <strong> (Jesus Christ) </strong>
                                that has ever lived on the earth. 
                            </p>
                            <p> 
                                Jesus Christ is coming back to govern this physical world. He is coming to rule the nations of the world. 
                                This is that one government that will bring unprecedented world peace, unity, love, health, 
                                economic stability, eternal security and prosperity. 
                                This is the good news that has been denied from mankind for 6,000 years. 
                                We bring you the true gospel, the good news of a coming government of God. 
                                It is a message of hope for the entire world and for you and your family. 
                                God is building a family that will soon rule the entire earth with joy, peace and righteousness.
                            </p>
                            <p>
                                <strong> The Vision </strong> <br />
                                The vision is beyond this present world. 
                                It is living for a future with Christ ruling the nations of this world after evil 
                                must have been driven away from the earth. 
                                It is participating in a literal government in which true Christians, those who overcame self, 
                                the world and Satan in this present earth. 
                                It is finally spending eternity with Christ in the new earth and heaven. 
                                God is working, And I am glad to announce to that you have a wonderful role to play to see that God's vision, 
                                His kingdom is advanced as we prepare for Christ's second coming. This is the reason you are still alive today. 
                                Isn't that so exciting? Living your real life with Christ in a perfect world! 
                                For me, it is everything! With this in mind, your vision, hope and future should be beyond this world. 
                                To live above the noise and troubles of this world is to invest your time, 
                                talents and treasure into eternity through partnership with God in kingdom advancement. 
                                Playing your role is the reason you were born. Will you play your role?
                                Do this and I am confident that you will fulfil your eternal purpose with joy unspeakable. 
                                Thank you for taking time to visit our website. And I believe that you will have a fulfilling time 
                                going through our lines. 
                            </p>
                            <Button className={styles.Button}>
                                <a href="/prayer-of-salvation" className={styles.Link}> PRAYER OF SALVATION </a>
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col xl={{ span: 3}} lg={{ span: 3}} md={{ span: 3 }} sm={{ span: 24}} xs={{ span: 24}}/>
            </Row>
        )
    }
}

export default useShallowEqual(HomeWelcome);