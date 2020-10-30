import {API} from '../../../backend';

export const getAllProjects = (userId,token) => {
    return fetch(`${API}/project/${userId}`, {
        method: "GET",
        headers : {
            Accept: "application/json",
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        },
    }).then(res => {
        return res.json()
    }).catch(err => console.log(err,'err'))
}