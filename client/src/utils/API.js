import axios from "axios";

export default {

    addCategory : function(data){
        return axios.post("/category", data);
    },
    getCategory : function(data){
        return axios.get('/category');
    }

}

