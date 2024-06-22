import styles from './ListStats.module.css'

interface IStats{
    counter: number,
    checkedCounter: number
}

export function ListStats({counter, checkedCounter}:IStats) {
    return (
        <div className={styles.main}>
            <aside className={styles.criadas}>
                <p>Tarefas Criadas</p>
                <span>{counter}</span>
            </aside>
            
            <aside className={styles.concluidas}>
                <p>Concluídas</p>
                <span>{`${checkedCounter} de ${counter}`}</span>
            </aside>

        </div>
    )
}