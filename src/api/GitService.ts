import axios from "axios";


export default class GitService {
    static async getProfile(user:string) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
    static async getRepos() {
        try {
            
        } catch (e) {
            
        }
    }
}