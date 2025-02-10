import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "10d2082a-9f56-40ce-9528-57968065bbad"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    toFollow(id) {//доделать
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,  {

        })
    }

}