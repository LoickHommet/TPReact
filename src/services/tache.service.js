import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class PostService {

    static async list(limit = null) {
        let call = await axios.get(`${baseUrl}/todos`);
        let posts = limit !== null ? call.data.slice(0, limit) : call.data;
        let users = await axios.get(`${baseUrl}/users`);

        for (let post of posts) {
            for (const user of users.data) {
                if (user.id === post.userId)
                    post.user = user;
            }
        }
        return posts;
    }


    /**
     * Create post
     * @param data 
     * @returns {Promise<AxiosResponse<any>}
     */
    static async create(data) {
        return await axios.post(`${baseUrl}/todos`, data)
    }

    /**
     * Details of post
     * @param {*} id 
     * @returns 
     */
         static async details(id) {
            return await axios.get(`${baseUrl}/todos/${id}`)
        }

            /**
     * Delete of post
     * @param  id 
     * @returns 
     */
    static async delete(id) {
        return await axios.delete(`${baseUrl}/todos/${id}`)
    }

        /**
     * Update of post
     * @param  id 
     * @param  data 
     * @returns 
     */
         static async update(id, data) {
            return await axios.put(`${baseUrl}/todos/${id}`, data)
        }
}
