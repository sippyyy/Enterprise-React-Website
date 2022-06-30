import clsx from 'clsx'

import style from './header.module.scss'
import {useState,useEffect,useRef} from 'react'
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";



function Header() {

    const [bgrHeader,setBgrHeader] = useState(false)
    const [hide,setHide] = useState(true)
    const [open,setOpen] =useState(false)
    const refBlock = useRef()


    useEffect(()=>{

        if(window.innerWidth > 768){
            setHide(true)
        }else{
            setHide(false)
        }
        
        const handleResize = ()=>{
            if(window.innerWidth > 768){
                setHide(true)
            }else{
                setHide(false)
            }
        }

        window.addEventListener('resize',handleResize)
    })

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 10){
                setBgrHeader(true)
            }else{
                setBgrHeader(false)
            }
        }


        window.addEventListener('scroll',handleScroll)

    },[])

    const handleOpen = ()=>{
        setOpen(open === true ? false : true)
    }

    console.log(open)



    return ( 
        <div className={clsx(style.wrapper)}>
                <div className={clsx(style.navbar,{[style.black] : bgrHeader === true})}>
                    <div className={clsx(style.navbar__left)}>
                        <h1 className={clsx(style.navbar__logo)}>LOGO</h1>
                    </div>
                    <button 
                    className={clsx(style.button__open,{[style.hide] : hide === true})}
                    onClick={handleOpen}
                    >
                        <AiOutlineMenu className={clsx(style.button__icon)} ></AiOutlineMenu>
                    </button>
                    <div 
                    ref={refBlock}
                    className={clsx(style.navbar__right,{[style.active] : open === true})}>
                        <button 
                        className={clsx({[style.hide] : hide === true})}
                        onClick={handleOpen}>
                            <AiOutlineClose className={clsx(style.button__icon)}></AiOutlineClose>
                        </button>
                        <ul className={clsx(style.navbar__list)}>
                            <li className={clsx(style.navbar__item)}><a href="#work">WORK</a></li>
                            <li className={clsx(style.navbar__item)}><a href="#services">SERVICES</a></li>
                            <li className={clsx(style.navbar__item)}><a href="#contact">CONTACT</a></li>                            
                        </ul>
                    </div>
                </div>
        </div>
     );
}

export default Header;