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
                            <Image className={styles.Image} src={[ WelcomeImage, WelcomeImage ]} />
                            <p> 
                                <strong> Have you captured the Vision? </strong> <br />
                                <strong> <i> "Then the Lord... Said, write the vision, and make it plain on tablets, 
                                that he may run who reads it." </i> </strong> <strong> (Habakkuk 2: 2 NKJV) </strong>
                                The last command of Jesus Christ was for His disciples to go into the world and make disciples all nations. 
                                He also gives us the privilege and honour to join the greatest movement.
                            </p>
                            <p>
                                Sharing the greatest news of the greatest soon - coming world - ruling, supernatural 
                                government of the greatest man - Jesus Christ that ever lived in the earth. 
                                Jesus Christ is coming back to govern this physical world. His is coming to rule the nations of the world. 
                                This is that one government that will bring unprecedented world peace, unity, love, health, 
                                economic stability, eternal security and prosperity. 
                                This is the good new that has been denied from mankind for 6,000 years. 
                                We bring you the true gospel, the good news of a coming government of God. 
                                It is a message of hope for the entire world for you and your family. 
                                God is building a family that will soon rule the entire earth with joy, peace and righteous.
                            </p>
                            <p>
                                <strong> The Vision </strong> <br />
                                The vision is beyond this present world. 
                                It is living to for a future with Christ ruling the nations of this world after evil 
                                must have been driven away from the earth. 
                                It is participating in a literal government in which true Christians - those who overcame self, 
                                the world and Satan in this present earth. 
                                It is finally spending eternity with Christ in the new earth and heaven. 
                                God is working. And I am glad to announce to that you have a wonderful role to play to see that God's vision, 
                                His kingdom is advanced as we prepare for Christ's second coming. This is the reason you are still alive today. 
                                Isn't that so exciting? Living your real life with Christ in a perfect world! 
                                For me, it is everything! With this in mind, your vision, hope and future should be beyond this world. 
                                To live above the noise and troubles of this world is to invest your time, 
                                talents and treasure into eternity through partnership with God in kingdom advancement. 
                                Playing your role is the reason you were born. Will you play your role?
                                Do this and I am confident that you will fulfil your eternal purpose with joy unspeakable. 
                                Thank you for taking time to visit our website. And I believe that you will have a fulfilling time 
                                going through our lines. 
                                But if you have not believed that Jesus Christ died on the cross to save you and that God raised 
                                Him from the death for you to live till eternity...
                            </p>
                            <p>
                                I trust that you want to be a citizen of God's kingdom. 
                                But If you are not yet born again, 
                                we invite you to make Jesus Christ the Lord of your life by saying these words of prayer:
                                “Oh Lord God, I come to you in the name of Jesus Christ. 
                                Your word says, “…that whosoever shall call upon the name of the Lord shall be saved”. 
                                I believe in Jesus Christ, the Son of the living God. 
                                I believe Jesus died for me and that he was buried and raised from the dead. 
                                Right now, I confess with my mouth that Jesus Christ is Lord of my life. 
                                I receive by faith eternal life into my spirit. 
                                Thank you lord for saving my soul. I now have Christ dwelling in me. 
                                I am saved, I am born again. Halleluyah!
                                Congratulations! You are now a child of God. Welcome to this great family!! 
                                To receive more information on how you can grow as a Christian, kindly tap below to send us an email.
                            </p>
                            <Button href="mailto:info@missionn2n.com" type="primary" size="large"> I want to Receive more information </Button>
                        </div>
                    </div>
                </Col>
                <Col xl={{ span: 3}} lg={{ span: 3}} md={{ span: 3 }} sm={{ span: 24}} xs={{ span: 24}}/>
            </Row>
        )
    }
}

export default useShallowEqual(HomeWelcome);