import clsx from 'clsx'
import {useState,useEffect} from 'react'

import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import style from './slider.module.scss'

function Slider() {

const [height,setHeight] = useState()

    useEffect(()=>{
        setHeight(window.innerHeight)
    },[])

    return ( 
        <Container>
            <Row className={clsx(style.wrapper)}
                style={{
                    height: `${height}px`,
                }}
            >
                <Col xs={10} sm={12} md={12} lg={12}>
                    <h2 className={clsx(style.title)}>Creative Innovative Design Agency</h2>
                </Col>
                <Col lg={11} xs={10} sm={12} md={11}>
                <p className={clsx(style.desc)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </Col>
            </Row>
        </Container>
     );
}

export default Slider;