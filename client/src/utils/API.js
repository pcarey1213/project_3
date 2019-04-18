import axios from "axios";

export default {

    addCategory : function(data){
        return axios.post("/category", data);
    },
    getCategory : function(data){
        return axios.get('/category');
    },
    getOneCategory : function(data){
        return axios.get(data);
        //data format example /category/5cb62e10b7e34a3a98a666de
    },
    addSubCategory: function(id, data){
        return axios.post('/category/'+id, data)
    }

}

