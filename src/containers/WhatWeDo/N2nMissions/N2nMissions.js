import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './N2nMissions.module.scss';

class N2nMissions extends Component {
    render() {
        return (
            <div> N2nMissions </div>
        )
    }
}

export default useShallowEqual(N2nMissions);