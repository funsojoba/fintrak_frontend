import { ADD_AVATAR, ADD_AVATAR_FAILED, ADD_AVATAR_SUCCESS } from "../types";

import axios from "axios";
import headers from "../../request";
import BASEURL from "../../baseURL";


const token = localStorage.getItem('token')


const startAdd = () => ({
    type: ADD_AVATAR
})

const addAvatarFailed = payload => (
    {
        type: ADD_AVATAR_FAILED,
        payload
    }
)

const addAvatarSuccess = payload => ({
    type: ADD_AVATAR_SUCCESS,
    payload
})

const addAvatar = payload => {
    return function (dispatch) {
        dispatch(startAdd())
        axios.post(BASEURL + 'user/avatar', payload, headers(token))
            .then(res => {
                dispatch(addAvatarSuccess(res))
                setInterval(function () {
                    window.location = "";
                }, 1500);
            })
            .catch(err => {
                dispatch(addAvatarFailed(err))
                if (err.response.status === 401) {
                    localStorage.clear()
                }
                console.log(err)
            })
    }
}

export default addAvatar