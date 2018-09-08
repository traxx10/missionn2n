import React, { Component } from 'react';
import { Row, Col, Form, Button, Icon, Input } from 'antd';
import { connect } from 'react-redux';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './PrayerMembershipForm.module.scss';

class PrayerMembershipForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log('hi')
            if(!this.props.sent) {
                this.props.prayerRequest(values);
                console.log('hihs')
            }
          }
        });
      }

    renderLoading = () => {
        if(this.props.loading) {
            return  (
                <div style={{ margin: 'auto' }}>
                    <Icon type="loading" style={{ fontSize: '2.5rem', color: "#ff00cc", textAlign: 'center' }}/>
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
                                  rules: [{ required: true, message: 'Please Mobile Number' }],   
                                })(
                                    <Input size="large"  prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                                )}
                            </Form.Item>

                            <Form.Item style={{ textAlign: 'center' }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ marginBottom: '1rem' }}
                                >
                                    SUBMIT MEMBERSHIP REQUEST
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

const Membership = Form.create()(PrayerMembershipForm);

export default connect()(useShallowEqual(Membership));