import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './EveryChildCount.module.scss';

class EveryChildCount extends Component {
    render() {
        return (
            <div> EveryChildCount </div>
        )
    }
}

export default useShallowEqual(EveryChildCount);