import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './ChurchMinistry.module.scss';

class ChurchMinistry extends Component {
    render() {
        return (
            <div> ChurchMinistry </div>
        )
    }
}

export default useShallowEqual(ChurchMinistry);