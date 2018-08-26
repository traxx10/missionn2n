import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import Menu from '../Menu/Menu';
import Image from 'react-image';
import n2nLogo from '../../assets/logo/n2n.svg';
import styles from './TopHeader.module.scss';

const { Header } = Layout;

class TopHeader extends Component {
    render() {
        return (
            <Header style={HeaderStyle.Header}>
                <Row className={styles.TopHeader}>
                    <Col span={6}>
                        <div className={styles.LogoContainer}>
                            <Image className={styles.Logo} src={[ n2nLogo, n2nLogo ]} alt="n2n"/>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div>
                            <Menu mode="horizontal" />
                        </div>
                    </Col>
                </Row>
            </Header>
        )
    }
}

const HeaderStyle = {
    Header : {
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        background: 'rgba(0,0,0,0.3)',
        padding: 0,
    }
}

export default TopHeader;