const initialState={
    naruto:{},
    error:null,
    success:null,
    datastate:null,
}

const narutoReducer=(state=initialState,action)=>{
    switch(action.type){
         case "ON_FETCH_SUCCESS":
                return {
                    ...state,
                    naruto:action.payload,
                    datastate:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE":
                return {
                    ...state,
                    error:action.payload,
                    datastate:'FETCHED_FAILURE',
                }
         case "ON_FETCHING":
                return {
                    ...state,
                    datastate:"FETCHING",
                }    
         
            default:
            return {...state}
    }
}
export default narutoReducer;