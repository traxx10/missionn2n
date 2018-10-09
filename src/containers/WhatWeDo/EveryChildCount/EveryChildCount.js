import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { useShallowEqual } from 'shouldcomponentupdate-children';
import { connect } from 'react-redux';
import { everyChildGallery } from '../../../actions';
import _ from 'lodash';
import Image from 'react-image';
import Footer from '../../Footer/Footer';
import styles from './EveryChildCount.module.scss';

class EveryChildCount extends Component {
    componentWillMount() {
        this.props.everyChildGallery();
    }

    renderGallery() {
        const mapGallery=  this.props.gallery.map(gallery => {
            return (
                <Col 
                key={gallery.uid}
                xs={{ span: 24}}
                sm={{ span: 24 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}>
                    <Card
                        hoverable
                        style={{ width: 240, margin: 'auto', marginBottom: '4rem' }}
                        cover={<Image style={{ }} alt="example" src={[ gallery.url ]}/>}
                    >
                    <Card.Meta
                        title={gallery.title}
                        description={gallery.title}
                    />
                    </Card>
                </Col>
            )
        })

        return mapGallery;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className={styles.EveryChildCount}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Text}>
                                    <div className={styles.Header}>
                                        <h1> EVERY CHILD COUNT </h1>
                                        <div className={styles.titleLine}>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Body}>
                                <div className={styles.Header}>
                                    <h3> EVERY CHILD COUNT </h3>
                                    <div className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <p>
                                        We help the less privileged children get a life. We do this by providing financial assistance for their education and health services. 
                                        The time to act is now. For unless we accelerate our progress almost 70 million children may die before 2030, 
                                        3.2 million in 2030 alone. 
                                        Children in sub-Saharan Africa will be 10 times more likely to die before their fifth birthdays than children in high-income countries, 
                                        nine out of 10 children in Africa. More than ever, we should recognize that development is to be carried on – sustained – by future 
                                        generations. When we help a boy access the medicine and nutrition he needs to be healthy and strong, we not only increase his chances in life, 
                                        we are providing a safe place for our society.
                                        When we educate a girl, we not only give her the tools and knowledge to own decisions and shape her own future, 
                                        we also help raise the standard of living of her family and her community.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.Body}>
                                <div className={styles.Header}>
                                    <h3> GALLERY </h3>
                                    <div style={{ marginBottom: '2rem'}} className={styles.titleLine}>
                                        <hr />
                                    </div>
                                    <Row gutter={24}>
                                        {this.renderGallery()}
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const gallery = _.map(state.EveryChildCountReducer.gallery, (val, uid) => {
        return { ...val, uid }
    })

    return {

        gallery
    }
}
export default connect(mapStateToProps, { everyChildGallery })(useShallowEqual(EveryChildCount));