import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './GenNext.module.scss';

class GenNext extends Component {
    render() {
        return (
            <div> GenNext </div>
        )
    }
}

export default useShallowEqual(GenNext);