import Task from "../models/Task";
import TaskTable from "./TaskTable";
import TaskForm from "./TaskForm";
import { useState } from "react";
const TaskList: React.FC = () => {

    const [TaskInput, setTaskInput] = useState<string>("")
    const [task, setTask] = useState<Task[]>([])
    const [EditTask, setEditTask] = useState<Task>()

    const addTask = () => {
        if (EditTask) {
            const updatedTasks = task.map(t =>
                t.taskID === EditTask.taskID ? new Task(t.taskID, TaskInput) : t
            );
            setTask(updatedTasks);
            setEditTask(undefined);
        } else {
            if (TaskInput.trim() !== "") {
                const newTask = new Task(task.length + 1, TaskInput);
                setTask([...task, newTask]);
            }
        }
        setTaskInput("");
    };

    const deleteTask = (taskID: number) => {
        setTask(task.filter(task => task.taskID != taskID))
    }

    const taskEdit = (taskID: number) => {
        const taskToEdit = task.find(task => task.taskID === taskID);
        if (taskToEdit) {
            setEditTask(taskToEdit);
            setTaskInput(taskToEdit.taskDesc); // Hiển thị nội dung task cần sửa
        }
    };

    return (
        <>
            <TaskTable tasks={task} deleteTask={deleteTask} taskEdit={taskEdit} />
            <TaskForm taskInput={TaskInput} setTaskInput={setTaskInput} addTask={addTask} editTask={EditTask} />

        </>
    )

}
export default TaskList