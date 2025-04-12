class Task {
    constructor(
        readonly _taskID : number,  
        private _taskDesc : string
    ){}

    public get taskDesc() : string {
        return this._taskDesc
    }

    public set taskDesc(taskDesc : string) {
        if(taskDesc.trim() === "") {
            throw new Error(" taskDesc khong duoc phep NULL ")
        }
        else {
            this._taskDesc = taskDesc
        }
    }

    public get taskID(): number {
        return this._taskID;
    }


   
}
export default Task