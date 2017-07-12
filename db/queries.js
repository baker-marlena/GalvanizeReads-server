const knex = require('../knex');

module.exports = {
  getAllBooks: () => {
    return knex('book');
  },
  getBook: (id) => {
    return knex('book').where("id", id).first();
  },
  addBook: (data) =>{
  return knex('book').insert({title:data.title, genre:data.genre, cover_url:data.cover_url, description:data.description}).returning('*');
  },
  deleteBook: (id) =>{
    return knex('book').where('id', id).del();
  },
  updateBook: (id, content) => {
    return knex('book').where('id', id).update(content, '*').returning('*');
  }
}
