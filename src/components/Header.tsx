import style from './Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header () {
    return (
        <header className={style.header}>
            <img src={rocket} alt="" />
            <span>to<span>do</span></span>
        </header>
    )
}