const init = db => {
  db.serialize(function() {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
       fullname VARCHAR(30),
       username VARCHAR(20),
       email VARCHAR(30),
       password VARCHAR(25),
       bio TEXT,
       location VARCHAR(30),
       website VARCHAR(50),
       birthday INTEGER(20)
    );`);
  });
};

module.exports = init;
