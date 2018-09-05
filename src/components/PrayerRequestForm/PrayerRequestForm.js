import React, { Component } from 'react';
import { Row, Col, Form, Button, Icon, Input } from 'antd';
import { connect } from 'react-redux';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './PrayerRequestForm.module.scss';

class PrayerRequestForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.prayerRequest(values);
          }
        });
      }

    renderLoading = () => {
        if(this.props.loading) {
            return  (
                <div style={{ margin: 'auto' }}>
                    <Icon type="loading" style={{ fontSize: '2.5rem', color: "#2DBCBC", textAlign: 'center' }}/>
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

                            <Form.Item label="Prayer Request">
                                {getFieldDecorator('prayer', {
                                 rules: [{ required: true, message: 'Please input your Prayer Request' }], 
                                })(
                                    <Input.TextArea 
                                    autosize={{ minRows: 5 }}
                                    size="large"  
                                    prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                                )}
                            </Form.Item>

                            <Form.Item style={{ textAlign: 'center' }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ marginBottom: '1rem' }}
                                >
                                    SUBMIT PRAYER REQUEST
                                </Button>
                                {this.renderLoading()}
                            </Form.Item>
                        </Form>
                        <p style={{ textAlign: 'center' }}> {this.props.message} </p>
                    </div>
                </Col>
            </Row>
        )
    }
}

const PrayerForm = Form.create()(PrayerRequestForm);

export default connect()(useShallowEqual(PrayerForm));