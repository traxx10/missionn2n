import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './Events.module.scss';

class Events extends Component {
    state = {
        loading: true,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000)
    }

    renderComponent = () => {
        if(this.state.loading) {
            return (
                <div className={styles.Loading}>
                    <Icon style={{ color: '#2DBCBC', fontSize: '5rem' }} type="loading" />
                </div>
            )

        } else  if(this.state.loading === false) {
            return (
                <div> Events </div>
            )
        }
    }

    render() {
        return (
            this.renderComponent()
        )
    }
}

export default useShallowEqual(Events);