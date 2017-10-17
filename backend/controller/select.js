const select = db => {
  db.all("SELECT * FROM users", (err, data) => {
    return data;
  });
};

module.exports = select;
