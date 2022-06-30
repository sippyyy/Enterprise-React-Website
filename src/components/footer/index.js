

import clsx from 'clsx'
import style from './footer.module.scss'

function Footer() {


    return ( 
        <div className={clsx(style.wrapper)}>
            <div className={clsx(style.left)}>
                <p className={clsx(style.name)}>2022 Creative</p>
            </div>
            <div className={clsx(style.right)}>
                <ul className={clsx(style.list)}>
                    <li className={clsx(style.item)}>Privacy Policy</li>
                    <li className={clsx(style.item)}>Terms And Conditions</li>
                </ul>
            </div>
        </div>
     );
}

export default Footer;