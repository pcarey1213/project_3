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
    addSecondSubCategory: function(id, data){
        return axios.post('/category/'+id, data)
    },
    addThirdSubCategory: function(id, data){
        return axios.post('/category2/'+id, data)
    },
    addCommentToFirst : function(id, data){
        return axios.post('/comment/1/'+id, data)
    },
    addCommentToSecond : function(id, data){
        return axios.post('/comment/2/'+id, data)
    },
    addCommentToThird : function(id, data){
        return axios.post('/comment/3/'+id, data)
    }

}

