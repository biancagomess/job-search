import axios from "axios"; 

export const api = new axios.create({
    baseURL: "htttp://localhost:3333"
}); 


