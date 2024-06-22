import styles from './List.module.css'
import clipboard from '../../assets/clipboard.svg'

export function List() {
    return (
        <div className={styles.main}>
            <img src={clipboard} alt="" />
            
            <span>
                <strong>
                    Você ainda não tem tarefas cadastradas
                </strong>
                Crie tarefas e organize seus itenas a fazer
            </span>
        </div>
    )
}