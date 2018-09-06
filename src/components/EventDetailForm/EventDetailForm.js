import React, { Component } from 'react';
import { Row, Col, Form, Button, Icon, Input } from 'antd';
import { connect } from 'react-redux';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './EventDetailForm.module.scss';

class EventDetailForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.keepUpdate(this.props.eventName, values)
          }
        });
      }

    renderLoading = () => {
        if(this.props.loading) {
            return  (
                <div style={{ margin: 'auto' }}>
                    <Icon type="loading" style={{ fontSize: '2.5rem', color: "#ff00cc" }}/>
                </div>
            )
        } else return null
    } 
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={24}>
                    <div className={styles.Form}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item label="Name">
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: 'Please input your name!' }],
                                })(
                                    <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                                )}
                            </Form.Item>

                            <Form.Item label="Email">
                                {getFieldDecorator('email', {
                                    rules: [{ type: 'email', message: 'Please input a valid email'},
                                    { required: true, message: 'Please input your email!' }],
                                })(
                                    <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                                )}
                            </Form.Item>

                            <Form.Item label="Mobile">
                                {getFieldDecorator('mobile', {
                                    
                                })(
                                    <Input size="large"  prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                                )}
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    YES, PLEASE KEEP ME UPDATE
                                </Button>
                                {this.renderLoading()}
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        )
    }
}

const EventForm = Form.create()(EventDetailForm);

export default connect()(useShallowEqual(EventForm));