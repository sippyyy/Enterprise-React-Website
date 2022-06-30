
import clsx from 'clsx'
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import { IoIosArrowRoundForward } from "@react-icons/all-files//io/IoIosArrowRoundForward";

import style from './services.module.scss'
import Title from '../title';


const dataRender = [
    {
        title:'Graphic Design',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur',
        price: '$400'
    },
    {
        title:'Product Design',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur',
        price: '$350'
    },
    {
        title:'Web Design',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur',
        price: '$800'
    },
    {
        title:'Video Editing',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur',
        price: '$500'
    },
]

function Services() {
    return ( 
        <div id="services" className={clsx(style.wrapper)}>
            <Title>Services</Title>
            <Container className={clsx(style.cover)}>
                <Row 
                className="g-5" 
                style={{justifyContent:"center",}}
                >
                    {dataRender.map((data,index)=>(
                        <Col lg={6} md={6} xs={10} key={index}>
                            <div className={clsx(style.container)}>
                                <div className={clsx(style.content)}>
                                    <h4 className={clsx(style.title)}>{data.title}</h4>
                                    <p className={clsx(style.desc)}>{data.desc}</p>
                                    <button className={clsx(style.btn)}>See Details <IoIosArrowRoundForward className={clsx(style.btn__icon)}></IoIosArrowRoundForward></button>
                                </div>
                                <div className={clsx(style.tag)}>
                                    <p className={clsx(style.tag__content)}>Starting at {data.price} </p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
     );
}

export default Services;
