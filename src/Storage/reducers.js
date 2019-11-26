import produce from "immer";

//Initial Redux State goes here
const initialState = {};



const reducers = produce((state = initialState, action) => {
    switch (action.type) {
        //Add come reducers here
        default:
            return state;
    }
});

export default reducers;
