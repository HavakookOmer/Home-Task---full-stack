import axios from "axios";

const baseUrl = "https://localhost:5001/api/"



export default {
    Users(url = baseUrl + 'Users/') {
        return {
            fetchById: id => axios.get(url +'GetUserDetails/'+ id)
        }
    },

    Tasks(url = baseUrl + 'Tasks/') {
        return {
            create: newRecord => axios.post(url, newRecord),
        }
    }
}