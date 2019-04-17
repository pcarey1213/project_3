import axios from "axios";

export default {
  // Gets all books
  getCategories: function() {
    return axios.get("/api/category/");
  },
  // Gets the book with the given id
  getCategory: function(id) {
    return axios.get("/api/category/" + id);
  },
  // Deletes the book with the given id
  deleteCategory: function(id) {
    return axios.delete("/api/category/" + id);
  },
  // Saves a book to the database
  addCategory: function(bubble) {
    return axios.post("/api/category/", bubble);
  }
};
