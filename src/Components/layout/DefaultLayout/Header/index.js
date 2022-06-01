
import {useState} from 'react'

import styles from'./Header.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import Button from '~/Components/Button';


const cx = classNames.bind(styles)
const nav_items = [
    {
        title: 'New in',
        to: '/newin',
        classe: ''
    },
    {
        title: 'Tất cả sản phẩm',
        to: '/allproduct',
        classe: ''
    },
    {
        title: 'Thats My Bear',
        to: '/thatsmybear',
        classe: ''
    },
    {
        title: 'Cộng đồng',
        to: '/congdong',
        classe: ''
    },
    {
        title: 'Chính sách',
        to: '/chinhsach',
        classe: ''
    },
]

function Header({setLogin, setCart}) {
    const [btn_menu, setBtn_Menu] = useState(nav_items)


    const handleClick = (idx) => {
        let temp = [...btn_menu]
        for (const itemp of temp) {
            itemp.classe = ''
        }
        temp[idx].classe = 'active'
        console.log(temp);
        setBtn_Menu([...temp])
    }
    const handleLogin = () => {
        setLogin(true)
    }


    const handleCart = () => {
        setCart(true)
    }

    return ( 
        <header className={cx('wrapper')} >
            <div className={cx('inner')}>
                <Link to={'/home'}>
                    <div className={cx('logo')}>
                        <img src='https://happyhow.me/1428355432291766272/images/22222.svg' alt= 'HAPPYHOW' />
                    </div>
                </Link>
                <div className={cx('search')}>
                    <input placeholder='Tìm Sản phầm và cửa hàng'>
                    </input>
                    <FontAwesomeIcon className={cx('icon-search')} icon = {faMagnifyingGlass} />
                </div> 
                <div className={cx('action-header')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} onClick = {handleCart}/>
                    <FontAwesomeIcon className={cx('icon')} icon={faUser} onClick ={handleLogin} />
                </div>
            </div>
            <div className={cx('nav-header')}>
                {btn_menu.map((item, idx) => (
                    <Button className = {cx(item.classe, 'nav-item')} key={idx} to = {item.to} onClick = {() => handleClick(idx)}>{item.title}</Button>
                ))}
            </div>
        </header>
     );
}

export default Header;