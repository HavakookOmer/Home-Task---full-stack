import api from "./api";

export const ACTION_TYPES = {
    FETCH_ID : 'FETCH_ID',
    CREATE : 'CREATE'
}


export const fetchId = (id, onSuccess) => dispatch => {
    console.log(id)
    api.Users().fetchById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ID,
                payload: response.data.tasks
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const createTask = (data, onSuccess) => dispatch => {
    api.Tasks().create(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: response.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}
