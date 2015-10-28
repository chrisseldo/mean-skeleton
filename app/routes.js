var Book = require('./models/books');

module.exports = function(app) {

  // server routes ===========================================================

  app.get('/api/books', function(req, res) {
    Book.find(function(err, books) {
      if (err)
        res.send(err);
        res.json(books); // return all books in JSON format
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};