import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './N2nPrayer.module.scss';

class N2nPrayer extends Component {
    render() {
        return (
            <div> N2nPrayer </div>
        )
    }
}

export default useShallowEqual(N2nPrayer);