import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../../Footer/Footer';
import styles from './ChurchPlanting.module.scss';

class ChurchPlanting extends Component {
    render() {
        return (
            <div>
                Church Planting
                <Footer />
            </div>
        )
    }
}

export default useShallowEqual(ChurchPlanting);