import axios from 'axios';

export const onFetchData=(search)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return axios.get(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=30`)
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                return res.data
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}


export const onFetchSuccess=(res)=>{
    return {
        type:"ON_FETCH_SUCCESS",
        payload:res
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE",
        payload:msg,
    }
}
export const onFetching=()=>{
    return{
        type:"ON_FETCHING"
    }
}
