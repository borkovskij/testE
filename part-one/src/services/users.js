import axios from './axiosConfig';


export const getUsersList = (page) => {
    const query = new URLSearchParams({
        page,
    })

    const url =
    "https://reqres.in/api/users?" +
    query;

    return axios.get(url)
}