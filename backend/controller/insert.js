const insert = db => {
  const query = `
INSERT INTO users (fullname, username, email, password, bio,location,website,birthday) VALUES
  ("Roni Sihombing", "Rosi168", "rosi168@yahoo.com", "777", "Love Traveling","Jakarta","rosi@blogspot.com","25 Januari 1989"),
  ("Sarah Sasi","Sarah178", "sarah178@yahoo.com", "888", "Love Hiking","Bogor","sarah@blogspot.com","20 Febuari 1992");
`;

  db.serialize(function() {
    var statement = db.prepare(query);
    statement.run();
    statement.finalize();
  });
};

module.exports = insert;
