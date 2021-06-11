import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const addTask = createAction('[TASK] add new action', props<{textNewTask: string}>());
export const clear = createAction('[TASK] clear');
export const deleteTask = createAction('[TASK] delete task', props<{index: number}>());
export const editTask = createAction('[Task] edit task', props<{index: number, upadateTask: string}>());
// export const reverseTask = createAction()

export interface TaskState{
    arrTask: string[];
}

export const initialState: TaskState = {
    arrTask: []
}

export const taskReducer = createReducer(
    initialState,
    on(addTask, (state, {textNewTask}) => ({
        ...state,
        arrTask: state.arrTask.concat(textNewTask)
        
    })),
    on(clear, state => ({
        ...state,
        arrTask: []

    })),
    on(deleteTask, (state, {index}) =>({
        ...state,
        arrTask:  state.arrTask.slice(0, index).concat(state.arrTask.slice(index + 1, state.arrTask.length)),
    })),
    on(editTask, (state,{index, upadateTask}) => {
        const arr = [...state.arrTask];
        arr[index] = upadateTask;
        return {
        ...state,
        arrTask: arr
    }})
);

export const featureSelector = createFeatureSelector<TaskState>('task');

export const taskSelector = createSelector(
    featureSelector,
    state => state.arrTask
);