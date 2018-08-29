import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './ContactUs.module.scss';

class ContactUs extends Component {
    state = {
        loading: true,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000)
    }

    renderComponent = () => {
        if(this.state.loading) {
            return (
                <div className={styles.Loading}>
                    <Icon style={{ color: '#2DBCBC', fontSize: '5rem' }} type="loading" />
                </div>
            )
        } else if(this.state.loading === false) {
            return (
                <Row style={{ background: '#fff' }}>
                    <Col span={24}>
                       <div className={styles.ContactUs}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> CONTACT US </h1>
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
                            <div className={styles.Content}>
                                <div className={styles.Header}>
                                    <h1> CONTACT US </h1>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                </div>
                                <div className={styles.Body}>
                                    <h2> N2N MISSION </h2>
                                    <p> 
                                        <a href="mailto:youremailhere@mail.com"> youremailhere@mail.com </a>
                                        <br style={{ marginBottom: '.5rem' }} />
                                        080-370-255-70
                                        <br />
                                        081-776-690-73
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </Col>
                </Row>
            )
        }
    }


    render() {
        return (
            this.renderComponent()
        )
    }
}

export default useShallowEqual(ContactUs);