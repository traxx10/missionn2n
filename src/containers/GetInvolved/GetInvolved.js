import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './GetInvolved.module.scss';

class GetInvolved extends Component {
    render() {
        return (
            <div> GetInvolved </div>
        )
    }
}

export default useShallowEqual(GetInvolved);