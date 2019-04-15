import axios from "axios";

export default {

    saveCategory : function(data){
        return axios.post("/api/categories", data);
    }

}