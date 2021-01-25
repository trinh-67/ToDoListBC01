import { BaseService } from "./BaseService.js";

export class TaskService  extends BaseService {

    constructor(){
      super();//gọi lại phương thức constructor của class cha
    }
    //Định nghĩa phương thức getAllTask
    getAllTask = () => {
        return this.get('http://svcy.myclass.vn/api/ToDoList/GetAllTask') ;
    }



    //Định nghĩa hàm đưa dữ liệu về backend
    addTask = (task) =>{//<= đúng định dang backend quy định
        return this.post('http://svcy.myclass.vn/api/ToDoList/AddTask',task);
       
    }


    //định nghĩa hàm xóa dữ liệu
    deleteTask = (taskName) => {
        return this.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`);
    }
    //Xây dựng chức năng donetask
    doneTask = (taskName) => {
        return this.put(`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`);
     }
    
      //Xây dựng chức năng reject task
    undoTask = (taskName) => {
        return this.put(`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`) 
    }
    
}

