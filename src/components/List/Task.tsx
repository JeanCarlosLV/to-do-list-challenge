import { TaskItems } from '../../App'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface ITask{
    data: TaskItems,
    onDeleteTask: (taskID: number) => void
    taskStatus: ({ id, value }: { id: number; value: boolean }) => void
}


export function Task({ data, onDeleteTask, taskStatus }: ITask) {

    function handleDeleteTask() {
        onDeleteTask(data.id)
    }

    function handleTaskToggle() {
        taskStatus({ id: data.id, value: !data.isChecked })
      }

    const spanCheckedClassname = data.isChecked
      ? styles['span-checked']
      : ''  

    return(
        <div className={styles.main}>
            <label htmlFor="" onClick={handleTaskToggle}>
                <input type="checkbox" className={styles.checkbox}/>
                <p></p>
                <span className={`${styles.description} ${spanCheckedClassname}`}>{data.description}</span>
            </label>
            
            
            <button onClick={handleDeleteTask}>
                <Trash size={20}/>
            </button>
        </div>
    )
}