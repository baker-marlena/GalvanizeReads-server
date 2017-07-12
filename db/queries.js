const knex = require('../knex');

module.exports = {
  getAllBooks: () => {
    return knex('book');
  },
  addBook: (data) =>{
  return knex('book').insert({title:data.title, genre:data.genre, cover_url:data.cover_url, description:data.description}).returning('*');
  }
}
