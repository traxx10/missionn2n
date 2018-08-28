import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './HomeGetInvolved.module.scss';

class HomeGetInvolved extends Component {
    render() {
        return (
            <Row>
                <Col span={24}>
                    <div className={styles.HomeGetInvolved}>
                        <div className={styles.Header}>
                            <h1> GET INVOLVED </h1>
                            <div className={styles.titleLine}>
                                <hr />
                            </div>
                        </div>
                        <div className={styles.Body}>
                            <p> 
                                Join us in fulfilling God's call to reach all nations with the Gospel
                                of Christ. Figure out your role and how you can get involved and then
                                find ways to come join us as we get men ready from nation to nation.
                            </p>
                            <Button className={styles.Button}>
                                <a href="/get-involved" className={styles.Link}> READ MORE </a>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default useShallowEqual(HomeGetInvolved);
