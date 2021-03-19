import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class UserService {

    static async list() {
        let response = await axios.get(`${baseUrl}/users`); 
        let users = response.data;

        for (let user of users) {
            let responseTache = await axios.get(`${baseUrl}/users/${user.id}/todos`);
            let taches =responseTache.data;
            user.nbrTache = taches.length;
        }
           return users;
    }

    static async details(id) {
        return await axios.get(`${baseUrl}/users/${id}`)
    }

}