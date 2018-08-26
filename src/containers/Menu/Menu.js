import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
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
                        <SubMenu key="/what-we-do" title={<span className={styles.Title}> WHAT WE DO </span>} className={styles.SubMenu}>
                            <MenuItemGroup>
                                <MenuItem key="/n2n-missions">
                                    <NavLink style={subMenu.navLink} activeStyle={subMenu.activeStyle} to="/n2n-missions">
                                        N2N MISSIONS 
                                    </NavLink>
                                </MenuItem>
                                <MenuItem key="/church-ministry">
                                    <NavLink style={subMenu.navLink} activeStyle={subMenu.activeStyle} to="/church-ministry">
                                        CHURCH MINISTRY 
                                    </NavLink>
                                </MenuItem>
                                <MenuItem key="/generation-next-discipleship-mission">
                                    <NavLink style={subMenu.navLink} activeStyle={subMenu.activeStyle} to="/generation-next-discipleship-mission">
                                        GENERATION NEXT DISCIPLESHIP MISSION 
                                    </NavLink>
                                </MenuItem>
                                <MenuItem key="/n2n-prayer-partners">
                                    <NavLink style={subMenu.navLink} activeStyle={subMenu.activeStyle} to="/n2n-prayer-partners">
                                        N2N PRAYER PARTNERS
                                    </NavLink>
                                </MenuItem>
                                <MenuItem key="/every-child-count">
                                    <NavLink style={subMenu.navLink} activeStyle={subMenu.activeStyle} to="/every-child-count">
                                        EVERY CHILD COUNT
                                    </NavLink>
                                </MenuItem>
                            </MenuItemGroup>
                        </SubMenu>
                        <MenuItem className={styles.MenuItem}>
                            <NavLink className={styles.NavLink} activeClassName={styles.ActiveLink} to="/get-involved">
                                GET INVOLVED
                            </NavLink>
                        </MenuItem>
                    </Menu>
                </Col>
            </Row>
        )
    }
}

const subMenu = {
    activeStyle: {
        color: '#2DBCBC',
    },

    navLink: {
        fontWeight: '600',
    }
}

export default withRouter(Menus);