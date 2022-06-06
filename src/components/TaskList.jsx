import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { comp, del, fltr } from '../redux/action'
import EditTask from './EditTask'

const TaskList = () => {
    const  {tasks,isFiltered}= useSelector(state=>state)
    const dispatch = useDispatch()
  return (
    <div>
        <button   onClick={()=>dispatch(fltr())} >  {isFiltered?"All":"Filter"} </button>
        {
            !isFiltered ?
            <div>
            {
                
                tasks.map(el=>
                    <div key={el.id} >
                             <h2   className={el.isDone?"done":""} > {el.action} </h2>
                             <button  onClick={()=>dispatch(comp(el.id))} > {el.isDone?"Undo":"Complete"} </button>
                             <button   onClick={()=>dispatch(del(el.id))}  >Delete</button>
                             <EditTask task={el} />
                    </div>
                    )
            }
        </div>
                :
                <div>
                    {
                
                tasks.filter(t=>!t.isDone).map(el=>
                    <div key={el.id} >
                             <h2   className={el.isDone?"done":""} > {el.action} </h2>
                             <button  onClick={()=>dispatch(comp(el.id))} > {el.isDone?"Undo":"Complete"} </button>
                             <button   onClick={()=>dispatch(del(el.id))}  >Delete</button>
                             <EditTask task={el} />
                    </div>
                    )
            }
                </div>
                
                }
    </div>
  )
}

export default TaskList