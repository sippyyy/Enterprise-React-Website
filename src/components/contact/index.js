import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import clsx from "clsx"

import style from './contact.module.scss'
import Title from '../title';

function Contact() {
    return ( 
        <div id="contact" className={clsx(style.wrapper)}>
            <Title>Contact</Title>
            <Container>
                <Row className={style.row__center}>
                    <Col lg={9}>
                        <p className={clsx(style.contact)}>contact@website.com</p>
                        <p className={clsx(style.contact)}>+0 0000 0000</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} xs={4}>
                        <a href="#" className={clsx(style.link)}> Twitter</a>
                    </Col>
                    <Col lg={2} md={2} xs={4}>
                        <a href="#" className={clsx(style.link)}> LinkedIn</a>
                    </Col>
                    <Col lg={2} md={2} xs={4}>
                        <a href="#" className={clsx(style.link)}> Dribble</a>
                    </Col>
                    <Col lg={2} md={2} xs={4}>
                        <a href="#" className={clsx(style.link)}> YouTube</a>
                    </Col>
                    <Col lg={2} md={2} xs={4}>
                        <a href="#" className={clsx(style.link)}> Instagram</a>
                    </Col>
                    <Col lg={2} md={2} xs={4}>
                        <a href="#" className={clsx(style.link)}> Facebook</a>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}

export default Contact;