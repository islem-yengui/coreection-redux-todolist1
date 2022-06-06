import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionTypes";

const init = {
  tasks: [
    { id: Math.random(), action: "learn react", isDone: true },
    { id: Math.random(), action: "learn API", isDone: false },
  ],
  isFiltered: false,
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };
    case COMPLETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    }
    case ADD_TASK:
        return{
            ...state,tasks:[...state.tasks,action.payload]
        }
    
    case FILTER_TASK:
        return {
            ...state,isFiltered:!state.isFiltered
        }
    case EDIT_TASK:
        return{
            ...state,tasks:state.tasks.map(el=>el.id===action.payload.id?action.payload:el)
        }
    default:
      return state;
  }
};

export default reducer;
