import Task from "../models/Task";

interface Props {
    addTask: () => void;
    taskInput: string;
    setTaskInput: (value: string) => void;
    editTask?: Task;  // <-- Thêm dòng này để nhận giá trị chỉnh sửa
}

const TaskForm: React.FC<Props> = ({ addTask, taskInput, setTaskInput, editTask }) => {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="col-8">
                <h2>Thêm Task</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="taskInput" className="form-label">Name Task</label>
                        <input
                            type="text"
                            className="form-control"
                            id="taskInput"
                            value={taskInput}
                            onChange={e => setTaskInput(e.target.value)}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={addTask}>
                        {editTask ? "Cập Nhật Task" : "Thêm Task"}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default TaskForm;
