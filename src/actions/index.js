import githubApi from '../api/githubApi';

export const inputValue = (data) => {
    return {
        type: 'INPUT_VALUE',
        payload: data
    }
};

export const getUser = async (e, iValue) => {
    e.preventDefault();

    const response = await githubApi.get(`/users/${iValue}`);
    console.log(response);
    return {
        type: 'FETCH_USER', 
        payload: response.data 
    }
}

