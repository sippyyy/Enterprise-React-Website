import clsx from 'clsx'
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

import style from './team.module.scss'
import Title from '../title';

import img1 from '~/img/guy.png'
import img2 from '~/img/guy1.png'
import img3 from '~/img/guy2.png'
import img4 from '~/img/guy3.png'


const dataRender= [
    {
        img: img1,
        name: 'Jhon Doe',
        role:'Digital Marketing Manager',
        right: false
    },
    {
        img: img2,
        name: 'Jhon Doe',
        role:'Digital Marketing Manager',
        right: true
    },
    {
        img: img3,
        name: 'Jhon Doe',
        role:'Digital Marketing Manager',
        right:  false
    },
    {
        img: img4,
        name: 'Jhon Doe',
        role:'Digital Marketing Manager',
        right: true
    },
]

function Team() {
    return ( 
        <div className={clsx(style.wrapper)}>
            <Title children2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. '>Our Team</Title>

            <div className={clsx(style.team)}>
                <Row className="g-0">
                    {dataRender.map((data,index)=>(
                        <Col lg={3} md={3} sx={12}  key={index}>
                            <div className={clsx(style.block)}>
                                <img className={clsx(style.img)} src={data.img} alt=""/>
                                <div className={clsx(style.detail,{[style.right] : data.right === true})}>
                                    <h4 className={clsx(style.title)}>{data.name}</h4>
                                    <p className={clsx(style.desc)}>{data.role}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>


    );
}

export default Team;