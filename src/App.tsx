import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ListStats } from './components/List/ListStats'
import { List } from './components/List/List'
import { Task } from './components/List/Task'
import { useState } from 'react'

export interface TaskItems{
  id: number,
  description: string,
  isChecked: boolean
}

function App() {
  const [ taskList, setTaskList ] = useState<TaskItems[]>([]);
  const [ taskText, setTaskText ] = useState('');

  function handleAddTask() {
    const addTask: TaskItems = {
      id: new Date().getTime(),
      description: taskText,
      isChecked: false
    }
    setTaskList((state) => [...state, addTask]);
    setTaskText('')
  }

  function deleteTask(taskToDelete: number) {
    const tasksWithoutDeletedOne = taskList.filter(task => {
        return task.id != taskToDelete;
    })

    setTaskList(tasksWithoutDeletedOne)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTaskList(updatedTasks)
  }

  const checkedTasksCounter = taskList.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0/*Valor inicial de prevValue*/)

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.inputArea}>
          <Input 
            onChange={(e) => setTaskText(e.target.value)}
            value={taskText}
          />
          <Button 
            onClick={handleAddTask}
          />
        </div>
        <div className={styles.list}>
          <ListStats 
            counter={taskList.length}
            checkedCounter={checkedTasksCounter}
          />
          {taskList.length > 0 ?
          taskList.map((task) => {
            return (
              <Task 
                key={task.id}
                data={task}
                onDeleteTask={deleteTask}
                taskStatus={handleToggleTask}
              />
            )
          })
          :
          <List />
        }
          
        </div>   
      </section>
      
    </main>
  )
}

export default App
