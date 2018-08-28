import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './ChurchPlanting.module.scss';

class ChurchPlanting extends Component {
    render() {
        return (
            <div> ChurchPlanting </div>
        )
    }
}

export default useShallowEqual(ChurchPlanting);