import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../Footer/Footer';
import styles from './PrayerOfSalvation.module.scss';

class PrayerOfSalvation extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <div className={styles.PrayerOfSalvation}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> PRAYER OF SALVATION </h1>
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
                            <Row>
                            <Col xl={{ span: 3}} lg={{ span: 3}} md={{ span: 3 }} sm={{ span: 24}} xs={{ span: 24}}/>
                            <Col 
                                xl={{ span: 18 }}
                                lg={{ span: 18}}
                                md={{ span: 18 }}
                                sm={{ span: 24}}
                                xs={{ span: 24}}
                            >
                                <div className={styles.Body}>
                                    <div className={styles.Header}>
                                        <h3> PRAYER OF SALVATION </h3>
                                        <div className={styles.titleLine}>
                                            <hr />
                                        </div>
                                        {/* <p> 
                                            <strong> Have you captured the Vision? </strong> <br />
                                            <strong> <i> "Then the Lord... Said, write the vision, and make it plain on tablets, 
                                            that he may run who reads it." </i> </strong> <strong> (Habakkuk 2: 2 NKJV) </strong>
                                            The last command of Jesus Christ was for His disciples to go into the 
                                            world and make disciples all nations. He also gives us the privilege and honour 
                                            to join the greatest movement in the earth, sharing the greatest news of the greatest 
                                            soon - coming world - ruling, supernatural government of the greatest man <strong> (Jesus Christ) </strong>
                                            that has ever lived on the earth. 
                                        </p>
                                        <p> 
                                            Jesus Christ is coming back to govern this physical world. He is coming to rule the nations of the world. 
                                            This is that one government that will bring unprecedented world peace, unity, love, health, 
                                            economic stability, eternal security and prosperity. 
                                            This is the good news that has been denied from mankind for 6,000 years. 
                                            We bring you the true gospel, the good news of a coming government of God. 
                                            It is a message of hope for the entire world for you and your family. 
                                            God is building a family that will soon rule the entire earth with joy, peace and righteousness.
                                        </p>
                                        <p>
                                            <strong> The Vision </strong> <br />
                                            The vision is beyond this present world. 
                                            It is living to for a future with Christ ruling the nations of this world after evil 
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
                                        </p> */}
                                        <p>
                                            I trust that you want to be a citizen of God's kingdom.
                                            But If you are not yet born again, we invite you to make Jesus 
                                            Christ the Lord of your life by saying these words of prayer
                                        </p>
                                        <p> <strong>
                                            “Oh Lord God, I come to you in the name of Jesus Christ. 
                                            Your word says, <i>  “…that whosoever shall call upon the name of the Lord shall be saved”. </i>
                                            I believe in Jesus Christ, the Son of the living God. 
                                            I believe Jesus died for me and that he was buried and raised from the dead. 
                                            Right now, I confess with my mouth that Jesus Christ is Lord of my life. 
                                            I receive by faith eternal life into my spirit. Thank you lord for saving my soul. 
                                            I now have Christ dwelling in me. I am saved, I am born again. Halleluyah! 
                                            </strong>
                                        </p> 
                                        <p>
                                            Congratulations! You are now a child of God. Welcome to this great family!! <br />
                                            To receive more information on how you can grow as a Christian, kindly tap below to send us an email.
                                        </p>
                                        <Button className={styles.Button} href="mailto:info@missionn2n.com" type="primary" size="large"> I want to Receive more information </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={{ span: 3}} lg={{ span: 3}} md={{ span: 3 }} sm={{ span: 24}} xs={{ span: 24}}/>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
}

export default useShallowEqual(PrayerOfSalvation);