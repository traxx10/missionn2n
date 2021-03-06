import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import Radium from 'radium';
import { NavLink, withRouter } from 'react-router-dom';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './Menu.module.scss';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menus extends Component {
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Menu
                        selectedKeys={[this.props.location.pathname]}
                        mode={this.props.mode}
                        className={styles.Menu}
                        theme={this.props.theme}
                        defaultOpenKeys={[this.props.openKeys]}
                        inlineIndent={0}
                    >
                        <MenuItem className={styles.MenuItem}>
                            <NavLink exact className={styles.NavLink} activeClassName={styles.ActiveLink} to="/">
                                HOME
                            </NavLink>
                        </MenuItem>
                        <MenuItem className={styles.MenuItem}>
                            <NavLink className={styles.NavLink} activeClassName={styles.ActiveLink} to="/events">
                                EVENTS
                            </NavLink>
                        </MenuItem>
                        <MenuItem className={styles.MenuItem}>
                            <NavLink className={styles.NavLink} activeClassName={styles.ActiveLink} to="/who-we-are">
                                WHO WE ARE
                            </NavLink>
                        </MenuItem>
                        <SubMenu style={{ padding: 0 }} key="/what-we-do" title={<span className={styles.Title}> WHAT WE DO </span>} className={styles.SubMenu}>
                            <MenuItemGroup>
                                <MenuItem key="/n2n-missions">
                                    <NavLink className={styles.subMenuNavLink} style={subMenu.navLink} activestyle={subMenu.activestyle} to="/n2n-missions">
                                        N2N MISSIONS 
                                    </NavLink>
                                </MenuItem>
                                <MenuItem key="/church-ministry">
                                    <NavLink className={styles.subMenuNavLink} style={subMenu.navLink} activestyle={subMenu.activestyle} to="/church-ministry">
                                        CHURCH MINISTRY 
                                    </NavLink>
                                </MenuItem>
                                <MenuItem key="/generation-next-discipleship-mission">
                                    <a target="_blank" href="http://gennextmission.com/" className={styles.subMenuNavLink} style={subMenu.navLink} activestyle={subMenu.activestyle} to="/generation-next-discipleship-mission">
                                        GENERATION NEXT DISCIPLESHIP MISSION 
                                    </a>
                                </MenuItem>
                                <MenuItem key="/n2n-prayer-network">
                                    <NavLink className={styles.subMenuNavLink} style={subMenu.navLink} activestyle={subMenu.activestyle} to="/n2n-prayer-network">
                                        N2N PRAYER NETWORK
                                    </NavLink>
                                </MenuItem>
                                <MenuItem key="/every-child-count">
                                    <NavLink className={styles.subMenuNavLink} style={subMenu.navLink} activestyle={subMenu.activestyle} to="/every-child-count">
                                        EVERY CHILD COUNT
                                    </NavLink>
                                </MenuItem>
                                <MenuItem key="/church-planting">
                                    <NavLink className={styles.subMenuNavLink} style={subMenu.navLink} activestyle={subMenu.activestyle} to="/church-planting">
                                        CHURCH PLANTING
                                    </NavLink>
                                </MenuItem>
                            </MenuItemGroup>
                        </SubMenu>
                        <MenuItem className={styles.MenuItem}>
                            <NavLink className={styles.NavLink} activeClassName={styles.ActiveLink} to="/get-involved">
                                GET INVOLVED
                            </NavLink>
                        </MenuItem>
                        {/* <MenuItem className={styles.MenuItem}>
                            <NavLink className={styles.NavLink} activeClassName={styles.ActiveLink} to="/prayer-of-salvation">
                                PRAYER OF SALVATION
                            </NavLink>
                        </MenuItem> */}
                    </Menu>
                </Col>
            </Row>
        )
    }
}

const subMenu = {
    activestyle: {
        color: '#2DBCBC',
    },

    navLink: {
        fontWeight: '600',
    },
}

export default withRouter(useShallowEqual(Radium(Menus)));