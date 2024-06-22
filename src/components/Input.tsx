import { InputHTMLAttributes, DetailedHTMLProps } from 'react'

import style from './Input.module.css'

export function Input({
    ...rest }: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) {

    return(
        <input 
            className={style.input}
            placeholder="Adicione uma nova tarefa"
            {...rest}
        />
    )
}