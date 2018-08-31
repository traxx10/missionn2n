import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import Footer from '../../Footer/Footer';
import styles from './EveryChildCount.module.scss';

class EveryChildCount extends Component {
    render() {
        return (
            <div>
                Every Child Count
                <Footer />
            </div>
        )
    }
}

export default useShallowEqual(EveryChildCount);