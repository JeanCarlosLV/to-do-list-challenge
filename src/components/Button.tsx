import {ButtonHTMLAttributes} from 'react'
import { PlusCircle } from 'phosphor-react'
import style from './Button.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void
}

export function Button({onClick}:IButton) {
    return (
        <button 
            className={style.button}
            onClick={onClick}
        >
            Criar <PlusCircle size={18} weight='bold'/>
        </button>
    )
}