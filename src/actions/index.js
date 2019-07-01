import githubApi from '../api/githubApi';

export const inputValue = (data) => {
    return {
        type: 'INPUT_VALUE',
        payload: data
    }
};

export const getUser = (e, iValue) => async dispatch  => {
    if(e) {e.preventDefault();}
    
    const response = await githubApi.get(`/users/${iValue}`);
    dispatch({
        type: 'FETCH_USER', 
        payload: response.data 
    })
}

