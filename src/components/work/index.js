
import clsx from 'clsx'
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import { useEffect,useState } from 'react';
import { IoIosArrowRoundForward } from "@react-icons/all-files//io/IoIosArrowRoundForward";


import img1 from '~/img/img1.png'
import img2 from '~/img/img2.png'
import img3 from '~/img/img3.png'
import img4 from '~/img/img4.png'
import img5 from '~/img/img5.png'
import img6 from '~/img/img6.png'
import style from './work.module.scss'
import Title from '../title';

const dataImg = [
    {
        img: img1,
        right: false
    },

    {
        img: img2,
        right: true
    },

    {
        img: img3,
        right: false
    },

    {
        img: img4,
        right: true,
    },

    {
        img: img5,
        right: false
    },

    {
        img: img6,
        right: true,
    },
]




function Work() {
    
    const [hide,setHide] = useState(true)
    const [newData,setNewData] = useState(dataImg)
    const [hideBtn,setHideBtn] = useState(false)


    useEffect(()=>{
        if(window.innerWidth >= 579){
            setHide(true)
            setNewData(dataImg)
        }else{
            setHide(false)
            setNewData(dataImg.slice(0,3))
        }
    },[])

    useEffect(()=>{
        const handleHide = ()=>{
            if(window.innerWidth >= 579){
                setHide(true)
                setNewData(dataImg)
                
            }else{
                setHide(false)
                setNewData(dataImg.slice(0,3))
            }
        }
        window.addEventListener('resize',handleHide)
    },[])

    const handleMore =()=>{
        if(newData == dataImg){
            setNewData(dataImg.slice(0,3))
        }else{
            setNewData(dataImg)
        }
        setHideBtn( hideBtn === true ? false : true)
    }




    return ( 
        <div id="work" className={clsx(style.wrapper)}>
            <Title>Work</Title>
            <div className={clsx(style.container)}>
                <Row className="g-0">
                    {newData.map((data,index)=>(
                        <Col lg={6} xs={12} sm={6} md={6} key={index}>
                            <div className={clsx(style.block)}>
                                <img className={clsx(style.block__img)} src={data.img} alt="" />
                                <div className={clsx(style.block__detail,{[style.right]: data.right === true})}>
                                    <h4 className={clsx(style.block__title)}>Abstract Design</h4>
                                    <p className={clsx(style.block__desc)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <button className={clsx(style.block__btn)}>See More <IoIosArrowRoundForward className={clsx(style.block__icon)}></IoIosArrowRoundForward> </button>
                                </div>
                            </div>
                            <div className={clsx(style.mobile,{[style.hide]: index === newData.length-1 },{[style.hide]: hide === true})}>
                                <div className={clsx(style.buttonBar)}></div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className={clsx(style.extra__btn,{[style.hide]: hide === true})} onClick={handleMore}>
                    <p className={clsx(style.button,{[style.hide]: hideBtn === true})}>See All</p>
                    <p className={clsx(style.button,{[style.hide]: hideBtn === false})}>Hide</p>
                </div>
            </div>
        </div>
     );
}

export default Work;