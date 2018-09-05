import React, { Component } from 'react';
import { Row, Col, Form, Button, Icon, Input } from 'antd';
import { connect } from 'react-redux';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import styles from './LeadForm.module.scss';

class LeadForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            if(!this.props.sent) {
                this.props.leadForm(values);
            }
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
                        <p> 
                            You want to start a LEAD centre or to become a member 
                            wherever you are in the world, please call 
                            <strong style={{ color: '#2DBCBC'}}> +2348037025570 </strong> 
                            or fill the form below to apply.
                        </p>
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
                                    rules: [{ required: true, message: 'Please input number' }], 
                                })(
                                    <Input size="large"  prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                                )}
                            </Form.Item>

                            <Form.Item label="Additional Information">
                                {getFieldDecorator('information', {
                                    initialValue: ""
                                //  rules: [{ required: true, message: 'Please input your Prayer Request' }], 
                                })(
                                    <Input.TextArea 
                                    // defaultValue=''
                                    autosize={{ minRows: 5 }}
                                    size="large"  
                                    />
                                )}
                            </Form.Item>

                            <Form.Item style={{ textAlign: 'center' }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ marginBottom: '1rem' }}
                                >
                                    I WANT TO START A LEAD CENTER
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

const Lead = Form.create()(LeadForm);

export default connect()(useShallowEqual(Lead));