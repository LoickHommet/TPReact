import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class UserService {

    static async details(id) {
        return await axios.get(`${baseUrl}/users/${id}`)
    }

}