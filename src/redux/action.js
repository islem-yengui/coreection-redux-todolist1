import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionTypes"


export const del =(id)=>{
    return {
        type:DELETE_TASK,
        payload:id
    }
}

export const comp =(id)=>{
    return {
        type:COMPLETE_TASK,
        payload:id
    }
}


export const add =(newTask)=>{
    return{
        type:ADD_TASK,
        payload:newTask
    }
}


export const fltr = () =>{
    return {
        type:FILTER_TASK
    }
}

export const edit = (editedTask)=>{
    return {
        type:EDIT_TASK,
        payload:editedTask
    }
}