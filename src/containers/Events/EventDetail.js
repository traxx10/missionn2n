import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, Icon, Modal, Button } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { toggleModal, keepUpdate } from '../../actions';
import EventDetailForm from '../../components/EventDetailForm/EventDetailForm';
import Img from 'react-image';
import styles from './EventDetail.module.scss';

class EventDetail extends Component {
    render() {
        return (
            <Row style={{ backgroundColor: '#fff' }}>
                <Col span={24}>
                    <div className={styles.EventDetail}>
                        <div className={styles.ImageContainer}>
                            <div className={styles.Text}>
                                <div className={styles.Header}>
                                    <h1> {this.props.location.state.eventDetail.title} </h1>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <h2> {this.props.location.state.eventDetail.tag_line} </h2>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Body}>
                            <Row gutter={24}>
                                <Col
                                xl={{ span: 8 }}
                                lg={{ span: 8}}
                                md={{ span: 8 }}
                                sm={{ span: 24}}
                                xs={{ span: 24 }}
                                >
                                    <Card bodyStyle={bodyStyle.style} bordered={false} className={styles.Card}>
                                    <Img 
                                        loader={ <Icon style={{ 
                                            color: '#2DBCBC', 
                                            fontSize: '2rem',
                                            display: 'flex',
                                            marginBottom: '1.5rem',
                                            width: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                            }} type="loading" /> } 
                                        src={[
                                            this.props.location.state.eventDetail.header_image_url,
                                            this.props.location.state.eventDetail.header_image_url,
                                            this.props.location.state.eventDetail.header_image_url
                                        ]} 
                                        className={styles.Image} />
                                        <h1> {this.props.location.state.eventDetail.location} </h1>
                                        <h2 style={{ color: '#2DBCBC', fontWeight: '700' }}> Contact </h2>
                                        <h2 className={styles.subtitle}> {this.props.location.state.eventDetail.contact_name} </h2>
                                        <h2 style={{ color: '#2DBCBC'}} className={styles.subtitle}> <i> {this.props.location.state.eventDetail.contact_email} </i> </h2>
                                        <h2 style={{ marginBottom: '1rem' }} className={styles.subtitle}> {this.props.location.state.eventDetail.contact_number} </h2>
                                    </Card>
                                </Col>
                                <Col 
                                xl={{ span: 16 }}
                                lg={{ span: 16}}
                                md={{ span: 16 }}
                                sm={{ span: 24}}
                                xs={{ span: 24 }}
                                >
                                    <p> {this.props.location.state.eventDetail.details} </p>
                                    <div className={styles.Date}>
                                        <Row>
                                            <Col
                                            style={{ marginBottom: '4rem' }}
                                            xl={{ span: 24}}
                                            lg={{ span: 24 }}
                                            md={{ span: 24 }}
                                            sm={{ span: 24 }}
                                            xs={{ span: 24 }}>
                                                <h1> {this.props.location.state.eventDetail.date} </h1>
                                                <h1> {this.props.location.state.eventDetail.time} </h1>
                                            </Col>
                                        </Row>
                                        <Button onClick={() => this.props.toggleModal(this.props.modalVisible)} className={styles.Button} size="large" type="primary">
                                           <span> Keep Me Updated </span>
                                        </Button>
                                        <Modal 
                                        title="We would keep you up to date"
                                        onOk={() => this.props.toggleModal(this.props.modalVisible)}
                                        onCancel={() => this.props.toggleModal(this.props.modalVisible)}
                                        visible={this.props.modalVisible}>
                                            <EventDetailForm 
                                            loading={this.props.loading}
                                            keepUpdate={this.props.keepUpdate}
                                            eventName={this.props.location.state.eventDetail.title}/>
                                        </Modal>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}
const bodyStyle = {
    style: {
        backgroundColor: 'rgba(239, 239, 239, 0.5)'
    }
}

const mapStateToProps = state => {
    return {
        modalVisible: state.EventDetailReducer.modalVisible,
        loading: state.EventDetailReducer.loading,
    }
}

export default withRouter(connect(mapStateToProps, { toggleModal, keepUpdate })(useShallowEqual(EventDetail)));