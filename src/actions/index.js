import axios from 'axios';

export const fetchSmurfs = () => {
    return dispatch => {
        return axios(`http://localhost:3333/smurfs`)
        .then(response => {
            if (response.error) {
                console.log(response.error)
            } else {
                dispatch(fetchSuccess(response.data))
            }
        })
    }
}

export const postSmurfs = (smurf) => {
    return dispatch => {
        return axios.post(`http://localhost:3333/smurfs`, smurf)
        .then(response => {
            if (response.error) {
                console.log(response.error)
            } else {
                dispatch(addSmurf(response.data))
            }
        })
    }
}

export const fetchStart = () => {
    return({type: 'FETCH_START'});
}

export const fetchSuccess = (smurfs)=> {
    return({type: 'FETCH_SUCCESS', smurfs});
}

export const addSmurf = (smurf)=>{
    return({type: 'ADD', smurf});
}

export const fetchError = (errorMessage)=> {
    return({type: 'FETCH_ERROR', errorMessage});
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.