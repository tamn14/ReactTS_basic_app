import React from "react";
import Task from "../models/Task";

interface TaskProps {
    tasks: Task[];
    deleteTask: (taskID: number) => void;
    taskEdit: (taskID: number) => void;
}

const TaskTable: React.FC<TaskProps> = ({ tasks, deleteTask, taskEdit }) => {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="col-8">
                <h2 className="my-5">Danh sach cong viec</h2>
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>Task ID</th>
                            <th>Name</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr>

                                <td>
                                    {task.taskID}
                                </td>
                                <td>
                                    {task.taskDesc}
                                </td>

                                <td>
                                    <button type="button" className="btn btn-success btn-sm btn-rounded me-3" onClick={() => deleteTask(task.taskID)}>
                                        Remove
                                    </button>
                                    <button type="button" className="btn btn-warning btn-sm btn-rounded" onClick={() => taskEdit(task.taskID)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskTable;
