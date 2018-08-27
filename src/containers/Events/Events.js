import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './Events.module.scss';

class Events extends Component {
    render() {
        return (
            <div> Events </div>
        )
    }
}

export default useShallowEqual(Events);