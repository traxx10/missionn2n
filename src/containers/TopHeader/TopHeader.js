import React, { Component } from 'react';
import { Layout, Row, Col, Drawer } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Menu from '../Menu/Menu';
import Image from 'react-image';
import n2nLogo from '../../assets/logo/n2n.svg';
import styles from './TopHeader.module.scss';

const { Header } = Layout;

class TopHeader extends Component {
    state = {
        mobileMenu: false,
    }

    toggleMenu = (state) => {
        this.setState({ mobileMenu: !state })
    }

    renderMobileMenu = () => {
        if(this.state.mobileMenu) {
            return (
                <Menu mode="inline" theme="dark"/>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <Header style={HeaderStyle.Header}>
                    <Row className={styles.TopHeader}>
                        <Col span={6}>
                            <div className={styles.LogoContainer}>
                                <Image className={styles.Logo} src={[ n2nLogo, n2nLogo ]} alt="n2n"/>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div className={styles.DesktopMenu}>
                                <Menu mode="horizontal" theme="light"/>
                            </div>
                            <div onClick={() => this.toggleMenu(this.state.mobileMenu)} className={styles.ToggleMenu}>
                                <div className={styles.Top} />
                                <div className={styles.Middle} />
                                <div className={styles.Bottom} />
                            </div>
                        </Col>
                    </Row>
                    <Drawer  
                        className={styles.Drawer}
                        style={{ background: 'rgba(22,25,27,0.9)'}}
                        visible={this.state.mobileMenu} placement="left"
                        closable={true} width="100%" zIndex={500}>
                            <Menu mode="inline" theme="dark"/>
                    </Drawer>
                </Header>
            </div>
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

export default useShallowEqual(TopHeader);