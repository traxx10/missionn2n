import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Footer from '../../Footer/Footer';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './ChurchMinistry.module.scss';

class ChurchMinistry extends Component {
    render() {
        return (
            <div>
                ChurchMinistry
                <Footer />
            </div>
        )
    }
}

export default useShallowEqual(ChurchMinistry);