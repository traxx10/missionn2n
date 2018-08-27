import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './WhoWeAre.module.scss';

class WhoWeAre extends Component {
    render() {
        return (
            <div> WhoWeAre </div>
        )
    }
}

export default useShallowEqual(WhoWeAre);